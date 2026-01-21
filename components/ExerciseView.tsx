import React, { useState, useEffect, useRef } from 'react';
import { Mission } from '../types';
import { useRewardedAd } from '../hooks/useRewardedAd';

interface ExerciseViewProps {
  exercise: Mission;
  onSuccess: () => void;
  onBack: () => void;
}

const ExerciseView: React.FC<ExerciseViewProps> = ({ exercise, onSuccess, onBack }) => {
  const [input, setInput] = useState('');
  const [feedback, setFeedback] = useState<{ text: string; type: 'error' | 'info' | 'success' } | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [showSolution, setShowSolution] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Ad Logic
  const { showAd, isLoading: isLoadingAd } = useRewardedAd();
  const [adsWatched, setAdsWatched] = useState(0);

  const handleSkipLevel = async () => {
    const success = await showAd();
    if (success) {
      const newCount = adsWatched + 1;
      setAdsWatched(newCount);
      if (newCount >= 2) {
        setFeedback({ text: "¡Nivel Superado con Ayuda! (Ads)", type: 'success' });
        setTimeout(onSuccess, 1000);
      } else {
        setFeedback({ text: "¡Primer anuncio completado! Faltan 1 más.", type: 'info' });
      }
    } else {
      setFeedback({ text: "No se pudo cargar el anuncio. Inténtalo de nuevo.", type: 'error' });
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
    setInput('');
    setFeedback(null);
    setShowSolution(false);
  }, [exercise]);

  const handleQuickChar = (char: string) => {
    setInput(prev => {
      const noSpaceBefore = [';', ':', '\\', '[', ']', '$', '{', '}', '|', '>', '<', '!', '#', '(', ')', '=', '/', '%', '*', '!', '.', '-'];
      const needsSpace = prev.length > 0 && !prev.endsWith(' ') && !noSpaceBefore.includes(char) && !['i', 'j', 'k', 'l', 'x', 'u', 'p', 'Esc'].includes(char);
      return prev + (needsSpace ? ' ' : '') + char;
    });
    inputRef.current?.focus();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      validateCommand();
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0) {
        const nextIdx = Math.min(historyIdx + 1, history.length - 1);
        setHistoryIdx(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdx > 0) {
        const nextIdx = historyIdx - 1;
        setHistoryIdx(nextIdx);
        setInput(history[history.length - 1 - nextIdx]);
      } else if (historyIdx === 0) {
        setHistoryIdx(-1);
        setInput('');
      }
    }
  };

  const validateCommand = () => {
    const rawInput = input.trim();
    const cleanInput = rawInput.replace(/\s+/g, ' ');
    const cleanSolution = exercise.solution.trim().replace(/\s+/g, ' ');

    if (rawInput) {
      setHistory(prev => [...prev, rawInput]);
      setHistoryIdx(-1);
    }

    let isCorrect = false;

    // Validación por IDs
    if (exercise.id.startsWith('l16')) {
      if (exercise.id === 'l16m1') isCorrect = cleanInput.includes('apt-get update') && cleanInput.includes('sudo');
      else if (exercise.id === 'l16m2') isCorrect = cleanInput.includes('apt-cache search space');
      else if (exercise.id === 'l16m3') isCorrect = cleanInput.includes('apt-get install emacs') && cleanInput.includes('sudo');
      else if (exercise.id === 'l16m4') isCorrect = cleanInput.includes('dpkg -l') && cleanInput.includes('grep vim');
      else if (exercise.id === 'l16m5') isCorrect = cleanInput.includes('apt-get remove emacs') && cleanInput.includes('sudo');
      else if (exercise.id === 'l16m6') isCorrect = cleanInput.includes('apt-get upgrade') && cleanInput.includes('sudo');
    }
    else if (exercise.id.startsWith('l17')) {
      if (exercise.id === 'l17m1') isCorrect = cleanInput === 'lsblk';
      else if (exercise.id === 'l17m2') isCorrect = cleanInput.includes('mount') && cleanInput.includes('/dev/sdb1') && cleanInput.includes('/mnt') && cleanInput.includes('sudo');
      else if (exercise.id === 'l17m3') isCorrect = cleanInput.includes('umount') && (cleanInput.includes('/mnt') || cleanInput.includes('/dev/sdb1')) && cleanInput.includes('sudo');
      else if (exercise.id === 'l17m4') isCorrect = cleanInput.includes('mkfs.ext4') && cleanInput.includes('/dev/sdb1') && cleanInput.includes('sudo');
      else if (exercise.id === 'l17m5') isCorrect = cleanInput.includes('dd') && cleanInput.includes('if=/dev/cdrom') && cleanInput.includes('of=~/backup.iso');
      else if (exercise.id === 'l17m6') isCorrect = cleanInput.includes('md5sum') && cleanInput.includes('imagen.iso');
    }
    else if (exercise.id.startsWith('l22')) {
      if (exercise.id === 'l22m1') isCorrect = cleanInput.includes('#!/bin/bash') && cleanInput.includes('echo');
      else if (exercise.id === 'l22m2') isCorrect = cleanInput.includes('chmod') && (cleanInput.includes('+x') || cleanInput.includes('755'));
      else if (exercise.id === 'l22m3') isCorrect = cleanInput.includes('clear') && cleanInput.includes('date') && cleanInput.includes('df -h');
      else if (exercise.id === 'l22m4') isCorrect = cleanInput.startsWith('#') && cleanInput.length > 5;
      else if (exercise.id === 'l22m5') isCorrect = cleanInput.includes('$PATH') || cleanInput.includes('./');
    }
    else if (exercise.id.startsWith('l23')) {
      if (exercise.id === 'l23m1') isCorrect = cleanInput.includes('SISTEMA_OPERATIVO=') && cleanInput.includes('echo');
      else if (exercise.id === 'l23m2') isCorrect = cleanInput.includes('MI_MAQUINA=$(') && cleanInput.includes('hostname');
      else if (exercise.id === 'l23m3') isCorrect = cleanInput.includes('readonly PI=') && cleanInput.includes('PI=4');
      else if (exercise.id === 'l23m4') isCorrect = cleanInput.includes('echo "$NOMBRE"') && cleanInput.includes("echo '$NOMBRE'");
      else if (exercise.id === 'l23m5') isCorrect = cleanInput.includes('$USER') && cleanInput.includes('$PWD');
    }
    else if (exercise.id.startsWith('l24')) {
      if (exercise.id === 'l24m1') isCorrect = cleanInput.includes('cat << _EOF_') && cleanInput.includes('uptime');
      else if (exercise.id === 'l24m2') isCorrect = cleanInput.includes('cat << "EJEMPLO"');
      else if (exercise.id === 'l24m3') isCorrect = cleanInput.includes('cat <<- _EOF_');
      else if (exercise.id === 'l24m4') isCorrect = cleanInput.includes('cat << _EOF_') && cleanInput.includes('> index.html');
      else if (exercise.id === 'l24m5') isCorrect = cleanInput.includes('cat << _EOF_');
    }
    else if (exercise.id.startsWith('l25')) {
      if (exercise.id === 'l25m1') isCorrect = cleanInput.includes('if [ "$USER" = "root" ]') && cleanInput.includes('else') && cleanInput.includes('fi');
      else if (exercise.id === 'l25m2') isCorrect = cleanInput.includes('if [ -d "/etc/network" ]') && cleanInput.includes('ls') && cleanInput.includes('fi');
      else if (exercise.id === 'l25m3') isCorrect = cleanInput.includes('EDAD=20') && cleanInput.includes('if [ $EDAD -ge 18 ]');
      else if (exercise.id === 'l25m4') isCorrect = cleanInput.includes('if') && cleanInput.includes('elif') && cleanInput.includes('else');
      else if (exercise.id === 'l25m5') isCorrect = cleanInput.includes('if [ -z "$BUSQUEDA" ]');
    }
    else if (exercise.id.startsWith('l27')) {
      if (exercise.id === 'l27m1') isCorrect = cleanInput.includes('read -p') && cleanInput.includes('nombre') && cleanInput.includes('edad') && cleanInput.includes('ciudad');
      else if (exercise.id === 'l27m2') isCorrect = cleanInput.includes('read -p') && cleanInput.includes('read -s -p');
      else if (exercise.id === 'l27m3') isCorrect = cleanInput.includes('read -n 1') && cleanInput.includes('-p');
      else if (exercise.id === 'l27m4') isCorrect = cleanInput.includes('if read -t 5') && cleanInput.includes('else');
      else if (exercise.id === 'l27m5') isCorrect = cleanInput.includes('IFS=":"') && cleanInput.includes('read') && cleanInput.includes('<<<');
    }
    else if (exercise.id.startsWith('l28')) {
      if (exercise.id === 'l28m1') isCorrect = cleanInput.includes('while [') && cleanInput.includes('-gt 0') && cleanInput.includes('((count--))') && cleanInput.includes('done');
      else if (exercise.id === 'l28m2') isCorrect = cleanInput.includes('until [ -e') && cleanInput.includes('sleep 2') && cleanInput.includes('done');
      else if (exercise.id === 'l28m3') isCorrect = cleanInput.includes('while true') && cleanInput.includes('read') && cleanInput.includes('break');
      else if (exercise.id === 'l28m4') isCorrect = cleanInput.includes('while') && cleanInput.includes('if') && cleanInput.includes('continue');
      else if (exercise.id === 'l28m5') isCorrect = cleanInput.includes('while read linea') && cleanInput.includes('done < nombres.txt');
    }
    else if (exercise.id.startsWith('l29')) {
      if (exercise.id === 'l29m1') isCorrect = cleanInput.includes('for nombre in Ana Beto Carla') && cleanInput.includes('echo') && cleanInput.includes('done');
      else if (exercise.id === 'l29m2') isCorrect = cleanInput.includes('for imagen in *.jpg') && cleanInput.includes('mv') && cleanInput.includes('copia_');
      else if (exercise.id === 'l29m3') isCorrect = cleanInput.includes('for ((') && cleanInput.includes('i=2') && cleanInput.includes('i<=20') && cleanInput.includes('echo');
      else if (exercise.id === 'l29m4') isCorrect = cleanInput.includes('for carpeta in /home/*') && cleanInput.includes('basename') && cleanInput.includes('wc -l');
      else if (exercise.id === 'l29m5') isCorrect = cleanInput.includes('for i in {1..100}') && cleanInput.includes('mkdir');
    }
    else if (exercise.id.startsWith('l30')) {
      if (exercise.id === 'l30m1') isCorrect = cleanInput === 'echo "Hola mundo"';
      else if (exercise.id === 'l30m2') isCorrect = cleanInput === 'bash -x script.sh';
      else if (exercise.id === 'l30m3') isCorrect = cleanInput.includes('set -x') && cleanInput.includes('set +x');
      else if (exercise.id === 'l30m4') isCorrect = cleanInput.includes('cd fotos_respaldo') && cleanInput.includes('||') && cleanInput.includes('exit 1');
      else if (exercise.id === 'l30m5') isCorrect = cleanInput.includes('export PS4=') && cleanInput.includes('$LINENO') && cleanInput.includes('set -x');
    }
    else if (exercise.id.startsWith('l31')) {
      if (exercise.id === 'l31m1') isCorrect = cleanInput.includes('case $opcion in') && cleanInput.includes('1) date ;;') && cleanInput.includes('2) uptime ;;') && cleanInput.includes('esac');
      else if (exercise.id === 'l31m2') isCorrect = cleanInput.includes('case $archivo in') && cleanInput.includes('*.jpg|*.png)') && cleanInput.includes('*.txt)');
      else if (exercise.id === 'l31m3') isCorrect = cleanInput.includes('read -n 1') && cleanInput.includes('[[:lower:]])') && cleanInput.includes('[[:upper:]])') && cleanInput.includes('[0-9])');
      else if (exercise.id === 'l31m4') isCorrect = cleanInput.includes('case $resp in') && cleanInput.includes('s|S|[sS][iI])') && cleanInput.includes('n|N)');
      else if (exercise.id === 'l31m5') isCorrect = cleanInput.includes('case ${mes,,} in') && cleanInput.includes('enero|febrero|marzo)');
    }
    else if (exercise.id.startsWith('l32')) {
      if (exercise.id === 'l32m1') isCorrect = cleanInput.includes('${entrada:-datos.txt}') && cleanInput.includes('archivo=');
      else if (exercise.id === 'l32m2') isCorrect = cleanInput.includes('${ARCHIVO##*.}');
      else if (exercise.id === 'l32m3') isCorrect = cleanInput.includes('${RUTA%/*}');
      else if (exercise.id === 'l32m4') isCorrect = cleanInput.includes('${TEXTO/error/alerta}') && cleanInput.includes('${NUEVO^^}');
      else if (exercise.id === 'l32m5') isCorrect = cleanInput.includes('${#pass}') && cleanInput.includes('-lt 8');
    }
    else if (exercise.id.startsWith('l33')) {
      if (exercise.id === 'l33m1') isCorrect = cleanInput.includes('$((n1 + n2))') && cleanInput.includes('$((n1 * n2))') && cleanInput.includes('$((n1 % n2))');
      else if (exercise.id === 'l33m2') isCorrect = cleanInput.includes('((PUNTOS += entrada))') && cleanInput.includes('while') && cleanInput.includes('((i++))');
      else if (exercise.id === 'l33m3') isCorrect = cleanInput.includes('$((gb * (2**30)))');
      else if (exercise.id === 'l33m4') isCorrect = cleanInput.includes('scale=2') && cleanInput.includes('| bc');
      else if (exercise.id === 'l33m5') isCorrect = cleanInput.includes('if [ $((n % 2)) -eq 0 ]');
    }
    else if (exercise.id.startsWith('l34')) {
      if (exercise.id === 'l34m1') isCorrect = cleanInput.includes('$1') && cleanInput.includes('$2') && cleanInput.includes('$3') && cleanInput.includes('echo');
      else if (exercise.id === 'l34m2') isCorrect = cleanInput.includes('if [ $# -lt 3 ]') && cleanInput.includes('exit 1') && cleanInput.includes('$0');
      else if (exercise.id === 'l34m3') isCorrect = cleanInput.includes('while [ $# -gt 0 ]') && cleanInput.includes('shift') && cleanInput.includes('echo');
      else if (exercise.id === 'l34m4') isCorrect = cleanInput.includes('for arg in "$@"') && cleanInput.includes('echo');
      else if (exercise.id === 'l34m5') isCorrect = cleanInput.includes('if [ -f "$1" ]') && cleanInput.includes('cp') && cleanInput.includes('date');
    }
    else if (exercise.id.startsWith('l35')) {
      if (exercise.id === 'l35m1') isCorrect = cleanInput.includes('mostrar_encabezado () {') && cleanInput.includes('mostrar_encabezado') && cleanInput.includes('$0');
      else if (exercise.id === 'l35m2') isCorrect = cleanInput.includes('verificar_archivo () {') && cleanInput.includes('[ -e "$1" ]') && cleanInput.includes('verificar_archivo "/etc/passwd"');
      else if (exercise.id === 'l35m3') isCorrect = cleanInput.includes('local NOMBRE=') && cleanInput.includes('scope () {');
      else if (exercise.id === 'l35m4') isCorrect = cleanInput.includes('return 0') && cleanInput.includes('return 1') && cleanInput.includes('if es_raiz');
      else if (exercise.id === 'l35m5') isCorrect = cleanInput === 'source ./herramientas.sh' || cleanInput === '. ./herramientas.sh';
    }
    else if (exercise.id.startsWith('l36')) {
      if (exercise.id === 'l36m1') isCorrect = cleanInput.includes('convert') && cleanInput.includes('-resize 200x') && cleanInput.includes('thumb_');
      else if (exercise.id === 'l36m2') isCorrect = cleanInput.includes('enscript') && cleanInput.includes('ps2pdf') && cleanInput.includes('|');
      else if (exercise.id === 'l36m3') isCorrect = cleanInput.includes('pdftk') && cleanInput.includes('cat output final.pdf');
      else if (exercise.id === 'l36m4') isCorrect = (cleanInput.includes('zenity --file-selection') || cleanInput.includes('zenity --info')) && cleanInput.includes('ARCHIVO=');
      else if (exercise.id === 'l36m5') isCorrect = cleanInput.includes('zenity --notification');
    }
    else if (exercise.id.startsWith('l37')) {
      if (exercise.id === 'l37m1') isCorrect = cleanInput.includes('invitados=(Alex Maria Juan Luis)') && cleanInput.includes('${invitados[0]}') && cleanInput.includes('${#invitados[@]}');
      else if (exercise.id === 'l37m2') isCorrect = cleanInput.includes('for fruta in "${frutas[@]}"') && cleanInput.includes('echo $fruta');
      else if (exercise.id === 'l37m3') isCorrect = cleanInput.includes('archivos=( * )') && cleanInput.includes('${#archivos[@]}') && cleanInput.includes('${archivos[2]}');
      else if (exercise.id === 'l37m4') isCorrect = cleanInput.includes('nums+=(40)') && cleanInput.includes('unset nums[1]') && cleanInput.includes('${nums[@]}');
      else if (exercise.id === 'l37m5') isCorrect = cleanInput.includes('${!servicios[@]}') && cleanInput.includes('for i in') && cleanInput.includes('${servicios[$i]}');
    }
    else if (exercise.id.startsWith('l38')) {
      if (exercise.id === 'l38m1') isCorrect = cleanInput.includes('sed') && cleanInput.includes('s/Servidro/Servidor/g') && cleanInput.includes('config.txt');
      else if (exercise.id === 'l38m2') isCorrect = cleanInput.includes('sed') && cleanInput.includes('/^#/d') && cleanInput.includes('archivo.conf');
      else if (exercise.id === 'l38m3') isCorrect = cleanInput.includes('sed') && cleanInput.includes('s|/usr/bin|/usr/local/bin|g');
      else if (exercise.id === 'l38m4') isCorrect = cleanInput.includes('sed') && cleanInput.includes('-n') && cleanInput.includes('50,60p') && cleanInput.includes('sistema.log');
      else if (exercise.id === 'l38m5') isCorrect = cleanInput.includes('sed') && cleanInput.includes('-i.bak') && cleanInput.includes('s/Desactivado/Activado/g') && cleanInput.includes('web.conf');
    }
    else if (exercise.id.startsWith('l39')) {
      if (exercise.id === 'l39m1') isCorrect = cleanInput.includes('awk') && cleanInput.includes('-F":"') && cleanInput.includes('$1') && cleanInput.includes('$7');
      else if (exercise.id === 'l39m2') isCorrect = cleanInput.includes('ls -l') && cleanInput.includes('awk') && cleanInput.includes('$5 > 1048576');
      else if (exercise.id === 'l39m3') isCorrect = cleanInput.includes('BEGIN') && cleanInput.includes('END') && cleanInput.includes('count++');
      else if (exercise.id === 'l39m4') isCorrect = cleanInput.includes('awk') && cleanInput.includes('printf') && cleanInput.includes('%-15s') && cleanInput.includes('%8.2f');
      else if (exercise.id === 'l39m5') isCorrect = cleanInput.includes('awk') && cleanInput.includes('$9 == 404') && cleanInput.includes('print $1');
    }
    else if (exercise.id.startsWith('exam4')) {
      if (exercise.id === 'exam4_m1') isCorrect = cleanInput.includes('${1:-') && cleanInput.includes('read -t 10');
      else if (exercise.id === 'exam4_m2') isCorrect = cleanInput.includes('if [ -d') && cleanInput.includes('case $OPC') && cleanInput.includes('[RLQ])');
      else if (exercise.id === 'exam4_m3') isCorrect = cleanInput.includes('for img in *.jpg') && cleanInput.includes('identify') && cleanInput.includes('>> datos_raw.txt');
      else if (exercise.id === 'exam4_m4') isCorrect = cleanInput.includes('sed \'s/pixels//g\'') && cleanInput.includes('awk') && cleanInput.includes('s/NR');
      else if (exercise.id === 'exam4_m5') isCorrect = cleanInput.includes('crear_lista()') && cleanInput.includes('archivos=(*.jpg)') && cleanInput.includes('${archivos[@]}');
      else if (exercise.id === 'exam4_m6') isCorrect = cleanInput.includes('${F^^}') && cleanInput.includes('zenity --info') && cleanInput.includes('${#archivos[@]}');
    }
    else if (exercise.id.startsWith('exam3')) {
      if (exercise.id === 'exam3_m1') isCorrect = cleanInput.includes('apt-get update') && cleanInput.includes('install ncal');
      else if (exercise.id === 'exam3_m2') isCorrect = cleanInput.includes('lsblk') && cleanInput.includes('mount /dev/sdb1 /mnt');
      else if (exercise.id === 'exam3_m3') isCorrect = cleanInput.includes('ping -c 3') && cleanInput.includes('wget -O datos.iso');
      else if (exercise.id === 'exam3_m4') isCorrect = cleanInput.includes('find ~') && cleanInput.includes('-size +1M') && cleanInput.includes('-mtime -2');
      else if (exercise.id === 'exam3_m5') isCorrect = cleanInput.includes('tar -czf') && cleanInput.includes('config_backup.tar.gz');
      else if (exercise.id === 'exam3_m6') isCorrect = cleanInput.includes('rsync') && cleanInput.includes('--delete');
      else if (exercise.id === 'exam3_m7') isCorrect = cleanInput.includes('#!/bin/bash') && cleanInput.includes('$USER') && cleanInput.includes('$TERM');
      else if (exercise.id === 'exam3_m8') isCorrect = cleanInput.includes('FECHA_ACTUAL=$(') && cleanInput.includes('readonly VERSION=1.0');
      else if (exercise.id === 'exam3_m9') isCorrect = cleanInput.includes('cat << _EOF_') && cleanInput.includes('> mi_estado.txt');
      else if (exercise.id === 'exam3_m10') isCorrect = cleanInput.includes('if [ -f') && cleanInput.includes('elif [ -d');
      else if (exercise.id === 'exam3_m11') isCorrect = cleanInput.includes('-gt') && cleanInput.includes('-eq') && cleanInput.includes('elif');
    }
    else if (exercise.id.startsWith('exam2')) {
      if (exercise.id === 'exam2_m2') {
        isCorrect = cleanInput.includes('PROYECTO_ALPHA') && cleanInput.includes('export');
      } else if (exercise.id === 'exam2_m5') {
        isCorrect = cleanInput.includes('i') && cleanInput.includes(':wq') && cleanInput.includes('yy');
      } else if (exercise.id === 'exam2_m7') {
        isCorrect = cleanInput.includes('0;34m') && cleanInput.includes('0m');
      } else {
        isCorrect = cleanInput.toLowerCase().includes(cleanSolution.toLowerCase()) || cleanInput.includes(cleanSolution.split('=')[0]);
      }
    }
    else {
      isCorrect = cleanInput.toLowerCase().includes(cleanSolution.toLowerCase());
    }

    if (isCorrect || cleanInput === cleanSolution) {
      setFeedback({ text: exercise.id.startsWith('exam') ? "¡Fase Completada! Accediendo a la siguiente etapa..." : "¡Lógica Verificada!", type: 'success' });
      setTimeout(onSuccess, 1200);
    } else {
      setFeedback({ text: `Acceso Denegado. Pista: ${exercise.hint}`, type: 'error' });
    }
  };

  const getQuickKeys = () => {
    if (exercise.id.startsWith('l16')) {
      return ['sudo ', 'apt-get ', 'update', 'install ', 'remove ', 'upgrade', 'emacs', 'apt-cache ', 'search ', 'space', 'dpkg -l', '| ', 'grep ', 'vim'];
    }
    if (exercise.id.startsWith('l17')) {
      return ['lsblk', 'sudo ', 'mount ', 'umount ', '/dev/sdb1', '/mnt', 'mkfs.ext4 ', 'dd ', 'if=/dev/cdrom', 'of=~/backup.iso', 'md5sum ', 'imagen.iso'];
    }
    if (exercise.id.startsWith('l22')) {
      return ['#!/bin/bash', 'echo ', 'chmod +x ', 'hola_mundo.sh', 'clear', 'date', 'df -h', '# ', './', '$PATH', '\\n'];
    }
    if (exercise.id.startsWith('l23')) {
      return ['SISTEMA_OPERATIVO=', '"Linux"', 'VERSION=', '"2.0"', 'echo ', '$SISTEMA_OPERATIVO', '$VERSION', 'MI_MAQUINA=$(hostname)', 'readonly PI=3.1416', 'PI=4', '"$NOMBRE"', "'$NOMBRE'", '$USER', '$PWD', '; '];
    }
    if (exercise.id.startsWith('l24')) {
      return ['cat << _EOF_', '_EOF_', 'cat << "EJEMPLO"', 'EJEMPLO', 'cat <<- _EOF_', 'uptime', '$(uptime)', '> index.html', '<html>', '<h1>', '$USER', '$HOSTNAME', '\\n'];
    }
    if (exercise.id.startsWith('l25')) {
      return ['if [ ', ' ]', '; then', 'elif [ ', 'else', 'fi', '"$USER" = "root"', '-d "/etc/network"', '-e ', '-z ', '-eq ', '-ge 18', '-lt ', 'EDAD=20', 'NIVEL=2', 'echo ', 'ls '];
    }
    if (exercise.id.startsWith('l27')) {
      return ['read ', '-p ', '-s ', '-n 1 ', '-t 5 ', 'nombre ', 'edad ', 'ciudad ', 'IFS=":"', '<<< ', 'user pass uid gid', '"$LINEA"', 'if ', '; then ', 'else ', 'fi '];
    }
    if (exercise.id.startsWith('l28')) {
      return ['while [ ', 'until [ ', 'do ', 'done', 'while true', 'break', 'continue', '((count--))', '((n++))', 'sleep 2', 'read linea', '< nombres.txt', '; ', 'if [ '];
    }
    if (exercise.id.startsWith('l29')) {
      return ['for ', 'in ', 'Ana Beto Carla', 'do ', 'done', '*.jpg', 'mv ', '"$imagen"', '"copia_$imagen"', 'for (( ', 'i=2; i<=20; i=i+2 ', '/home/*', 'basename ', 'ls ', 'wc -l', '{1..100}', 'mkdir '];
    }
    if (exercise.id.startsWith('l30')) {
      return ['bash -x ', 'set -x', 'set +x', 'export PS4=', '"+ L$LINENO: "', '|| { ', 'exit 1', 'echo ', 'cd ', 'fotos_respaldo', '; ', '}'];
    }
    if (exercise.id.startsWith('l31')) {
      return ['case ', '$opcion ', '$archivo ', '$tecla ', '$resp ', '${mes,,} ', 'in ', ') ', ';; ', 'esac', '*) ', '| ', '[[:lower:]])', '[[:upper:]])', '[0-9])', 's|S|[sS][iI])', 'n|N)', 'read -n 1 '];
    }
    if (exercise.id.startsWith('l32')) {
      return ['${', '}', ':-datos.txt}', '##*.', '%/*', '/error/alerta}', '^^}', '${#pass}', '-lt 8', 'archivo=', 'read -s -p ', '; ', 'if [ ', ' ]', 'then ', 'fi'];
    }
    if (exercise.id.startsWith('l33')) {
      return ['$((', '))', '+', '*', '%', '**', '+=', '((PUNTOS += ', 'entrada', '((i++))', 'scale=2', 'bc', '| ', 'read -p ', 'if [ ', ' -eq 0 ]', '; then ', 'fi'];
    }
    if (exercise.id.startsWith('l34')) {
      return ['$1', '$2', '$3', '$#', '$@', '$0', 'shift', 'exit 1', 'while [ $# -gt 0 ]', 'for arg in "$@"', 'if [ $# -lt 3 ]', 'echo ', 'cp ', 'date ', '; ', 'fi', 'done'];
    }
    if (exercise.id.startsWith('l35')) {
      return [' () {', '}', 'local ', 'return ', 'source ', './herramientas.sh', 'if ', '; then ', 'fi', 'mostrar_encabezado', 'verificar_archivo', 'es_raiz', '$0', '$1', '$EuID', ' -eq 0'];
    }
    if (exercise.id.startsWith('l36')) {
      return ['convert ', 'identify ', '-resize 200x', 'thumb_', 'enscript ', 'pdftk ', 'cat output ', 'final.pdf', 'zenity ', '--file-selection', '--info', '--notification', '| ps2pdf - ', 'ARCHIVO=$(', ')', 'if [ -n ', '; then ', 'fi'];
    }
    if (exercise.id.startsWith('l37')) {
      return ['=(', ')', '${', '[@]}', '[0]}', '[2]}', '{#', '{!', '+=', 'for i in', 'unset ', 'echo ', 'fruta', 'frutas', 'servicios', 'invitados', 'archivos', '*'];
    }
    if (exercise.id.startsWith('l38')) {
      return ['sed ', '\'s/', '/g\'', '\'s|', '|g\'', '\'/^#/d\'', '-n ', '\'50,60p\'', '-i.bak ', 'config.txt', 'archivo.conf', 'sistema.log', 'web.conf', '| ', 'grep ', '; '];
    }
    if (exercise.id.startsWith('l39')) {
      return ['awk ', '-F":"', '\'{ print ', '\t \'} \'', '\'$5 > 1048576', 'BEGIN { ', 'END { ', 'count++', 'count-1', 'printf ', '"%-15s %8.2f\\n"', '$1', '$2', '$5', '$7', '$9', '| ', '/etc/passwd'];
    }
    if (exercise.id.startsWith('exam4')) {
      return ['${1:-$(', ')}', 'read -t 10 ', 'if [ -d ', 'case $OPC ', '[RLQ])', 'for img in *.jpg', 'identify ', '>> datos_raw.txt', 'sed \'s/pixels//g\'', 'awk \'{s+=$1*$2} END {print s/NR}\'', 'crear_lista()', 'archivos=(*.jpg)', '${archivos[@]}', '${F^^}', 'zenity --info', '${#archivos[@]}', '| '];
    }
    if (exercise.id.startsWith('exam3')) {
      return ['sudo apt-get ', 'update', 'install ncal', 'lsblk', 'mount /dev/sdb1 /mnt', 'ping -c 3 google.com', 'wget -O datos.iso', 'find ~', '-type f', '-size +1M', '-mtime -2', 'tar -czf config_backup.tar.gz', 'rsync -av --delete', '#!/bin/bash', 'echo ', '$USER', '$TERM', 'readonly VERSION=1.0', 'cat << _EOF_', 'if [ -f ', 'elif [ -d ', '-gt', '-eq', '; then', 'fi', '| ', '; '];
    }
    if (exercise.id.startsWith('exam2')) {
      return ['printenv LANG', 'PROYECTO_ALPHA=', '"/home/usuario/datos"', 'export ', 'echo $PATH', 'vi config_test.txt', 'i', 'Esc', ':w', 'yy', 'p', 'dw', 'u', ':wq', 'PS1=', '"[\\t] "', '"\\u "', '"\\$ "', '"\\[\\033[0;34m\\]"', '"\\[\\033[0m\\]"', 'vi ~/.bashrc', 'source ~/.bashrc', '; '];
    }
    return [';', '|', '>', '&', '*', '!', '$', '{', '}', '"', '\'', '..', '/', '~'];
  };

  return (
    <div className="flex flex-col h-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-4 flex justify-between items-center">
        <button onClick={onBack} className="text-green-500 text-[10px] hover:underline flex items-center uppercase font-bold">
          <span className="mr-1">[x]</span> Cancelar
        </button>
        <button
          onClick={() => setShowSolution(!showSolution)}
          className="text-[9px] text-yellow-500/60 border border-yellow-500/20 px-2 py-1 rounded hover:bg-yellow-500/10 transition-colors uppercase font-bold"
        >
          {exercise.id.startsWith('exam') ? 'SOLUCIONARIO' : 'CHEAT SHEET'}
        </button>
      </div>

      <div className="flex-1 space-y-3">
        {showSolution && (
          <div className="bg-yellow-900/10 border border-yellow-500/20 p-2 rounded text-[10px] text-yellow-200/80 animate-in zoom-in duration-200 font-mono">
            <span className="font-bold text-yellow-600 mr-2">PROTOCOL:</span>
            {exercise.solution}
          </div>
        )}

        <div className="bg-[#121212] border border-green-900/20 p-3 rounded-md shadow-inner">
          <p className="text-xs text-gray-300 leading-relaxed italic">"{exercise.description}"</p>
        </div>

        <div className="bg-black border border-green-500/30 p-4 rounded-lg shadow-2xl min-h-[140px] flex flex-col font-mono relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 blur-3xl pointer-events-none"></div>
          <div className="flex-1 text-sm relative z-10">
            <div className="flex items-start">
              <span className="text-green-500 mr-2 shrink-0 font-bold"># user@kernel:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none outline-none flex-1 text-white caret-green-500 w-full"
                autoFocus
                spellCheck={false}
                autoComplete="off"
              />
            </div>
            {feedback && (
              <div className={`mt-3 p-2 text-[11px] rounded bg-opacity-10 whitespace-pre-wrap border-l-2 ${feedback.type === 'error' ? 'text-red-400 border-red-500 bg-red-500/10' :
                feedback.type === 'success' ? 'text-green-400 border-green-500 bg-green-500/10' : 'text-blue-400 border-blue-500 bg-blue-500/10'
                }`}>
                {feedback.text}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        <div className="flex flex-wrap justify-start gap-1 max-h-24 overflow-y-auto no-scrollbar pb-2">
          {getQuickKeys().map(char => (
            <button
              key={char}
              onClick={() => handleQuickChar(char)}
              className="bg-[#1a1a1a] border border-gray-800 px-3 h-9 flex items-center justify-center rounded text-xs font-mono text-gray-400 hover:border-green-500 hover:text-green-500 active:scale-90 transition-all"
            >
              {char}
            </button>
          ))}
        </div>

        <div className="grid gap-3">
          <button
            onClick={validateCommand}
            className="w-full bg-green-600 hover:bg-green-500 text-black font-black py-3 rounded-md uppercase tracking-[0.3em] shadow-[0_4px_0_rgba(22,101,52,1)] active:translate-y-1 active:shadow-none transition-all text-xs"
          >
            {exercise.id.startsWith('exam') ? 'CERTIFICAR COMANDO' : 'EJECUTAR COMANDO'}
          </button>

          {/* Botón de Saltar Nivel con Anuncios */}
          {!exercise.id.startsWith('exam') && (
            <button
              onClick={handleSkipLevel}
              disabled={isLoadingAd}
              className={`w-full py-3 rounded-md uppercase tracking-widest text-[10px] font-bold border transition-all flex items-center justify-center space-x-2 ${adsWatched > 0
                ? 'bg-yellow-500/10 border-yellow-500 text-yellow-500 animate-pulse'
                : 'bg-[#111] border-gray-800 text-gray-400 hover:text-white hover:border-gray-600'
                }`}
            >
              <span>{isLoadingAd ? 'Cargando Anuncio...' : adsWatched === 1 ? '🎬 Ver 1 Anuncio más para saltar' : '📺 Saltar Nivel (Ver 2 Anuncios)'}</span>
              {adsWatched > 0 && <span className="bg-yellow-500 text-black text-[9px] px-1 rounded font-black">{adsWatched}/2</span>}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExerciseView;