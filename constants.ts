import { Level, Section } from './types';

export const SECTIONS: Section[] = [
  {
    id: 1,
    title: "Sección 1: Dominio de la Shell",
    description: "Desde los fundamentos básicos hasta el control total de procesos y administración.",
    levelIds: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    id: 2,
    title: "Sección 2: Configuración y Edición",
    description: "Manejo del environment, scripts de inicio y dominio del editor vi.",
    levelIds: [12, 13, 14, 15]
  },
  {
    id: 3,
    title: "Sección 3: Tareas Comunes",
    description: "Gestión de software, almacenamiento, redes, búsqueda y lógica de automatización.",
    levelIds: [16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26]
  },
  {
    id: 4,
    title: "Sección 4: Automatización y Datos",
    description: "Interacción avanzada, procesamiento de flujos y scripting experto.",
    levelIds: [27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40]
  }
];

export const LEVELS: Level[] = [
  // Niveles previos (1-39) se mantienen intactos
  {
    id: 1,
    title: "Fundamentos de la Shell",
    theory: [
      { title: "1. El Intérprete de Comandos (Shell)", content: "La Shell es el programa que toma tus comandos del teclado y los pasa al sistema operativo para que se ejecuten. La mayoría de las distribuciones Linux utilizan una shell llamada bash (Bourne Again SHell), una versión mejorada del programa original de Unix, sh." },
      { title: "2. El Prompt y la Interfaz", content: "Sintaxis estándar: usuario@nombre_maquina directorio_actual $. Si el prompt termina en $, eres un usuario normal. Si termina en #, tienes privilegios de superuser (administrador)." },
      { title: "3. Funcionamiento Interno", content: "Historial de Comandos: Almacena tus comandos previos (navega con flechas Arriba/Abajo).\nEdición del Cursor: Usa flechas Izquierda/Derecha para corregir antes de presionar Enter.\nCopiado y Pegado: Al resaltar texto se copia; al presionar el botón central se pega (Ctrl-C/V no funcionan igual)." },
      { title: "4. La Consola Detrás de la Cortina", content: "Incluso sin interfaz gráfica, Linux mantiene terminales virtuales accesibles mediante Ctrl-Alt-F1 hasta F6. Para volver al entorno gráfico, normalmente se usa Alt-F7." }
    ],
    dictionary: [
      { command: "date", description: "Muestra la fecha y hora actual del sistema.", example: "date" },
      { command: "cal", description: "Muestra un calendario del mes actual.", example: "cal" },
      { command: "df", description: "Muestra el espacio libre en las unidades de disco.", example: "df" },
      { command: "free", description: "Muestra la cantidad de memoria libre y usada (RAM).", example: "free" },
      { command: "exit", description: "Cierra la sesión de la terminal actual.", example: "exit" }
    ],
    missions: [
      { id: "l1m1", title: "El Despertar de la Shell", description: "Acabas de entrar al sistema. Verifica que la Shell esté lista y consulta qué hora es en el servidor central.", scenario: "Terminal abierta, prompt esperando entrada.", solution: "date", hint: "Usa el comando date." },
      { id: "l1m2", title: "Auditoría de Recursos", description: "Como administrador, debes reportar si queda espacio en el disco duro y cuánta memoria RAM está libre antes de instalar software.", scenario: "Directorio inicial del usuario.", solution: "df; free", hint: "Ejecuta df seguido de free (puedes usar ; para separar comandos)." },
      { id: "l1m3", title: "El Viaje en el Tiempo", description: "Consulta el calendario actual para organizar tus tareas de mantenimiento.", scenario: "Terminal activa.", solution: "cal", hint: "Usa el comando cal." },
      { id: "l1m4", title: "La Salida Segura", description: "Tu turno ha terminado. Cierra la sesión de forma elegante usando el comando correcto.", scenario: "Sesión de usuario activa.", solution: "exit", hint: "Usa el comando exit." }
    ]
  },
  { id: 2, title: "Navegación del Sistema", theory: [], dictionary: [], missions: [] },
  { id: 3, title: "Explorando el Sistema", theory: [], dictionary: [], missions: [] },
  { id: 4, title: "Manipulación de Archivos", theory: [], dictionary: [], missions: [] },
  { id: 5, title: "Redescubriendo los Comandos", theory: [], dictionary: [], missions: [] },
  { id: 6, title: "Entrada, Salida y Error Estándar", theory: [], dictionary: [], missions: [] },
  { id: 7, title: "Expansión y Quoting", theory: [], dictionary: [], missions: [] },
  { id: 8, title: "Atajos y Edición Avanzada", theory: [], dictionary: [], missions: [] },
  { id: 9, title: "Permisos y Propiedad", theory: [], dictionary: [], missions: [] },
  { id: 10, title: "Gestión de Procesos", theory: [], dictionary: [], missions: [] },
  { id: 11, title: "EXAMEN DE CERTIFICACIÓN: LEGIÓN DEL KERNEL", theory: [], dictionary: [], missions: [], isExam: true },
  { id: 12, title: "El Entorno", theory: [], dictionary: [], missions: [] },
  { id: 13, title: "Editor vi", theory: [], dictionary: [], missions: [] },
  { id: 14, title: "Personalización del Prompt", theory: [], dictionary: [], missions: [] },
  { id: 15, title: "EXAMEN DE INTEGRACIÓN: EL ARQUITECTO DEL ENTORNO", theory: [], dictionary: [], missions: [], isExam: true },
  { id: 16, title: "Gestión de Paquetes", theory: [], dictionary: [], missions: [] },
  { id: 17, title: "Almacenamiento y Sistemas de Archivos", theory: [], dictionary: [], missions: [] },
  { id: 18, title: "Redes y Comunicación", theory: [], dictionary: [], missions: [] },
  { id: 19, title: "Búsqueda y Localización", theory: [], dictionary: [], missions: [] },
  { id: 20, title: "Archivos y Compresión", theory: [], dictionary: [], missions: [] },
  { id: 21, title: "Sinergia de Comandos", theory: [], dictionary: [], missions: [] },
  { id: 22, title: "Iniciación al Scripting", theory: [], dictionary: [], missions: [] },
  { id: 23, title: "Variables en Shell", theory: [], dictionary: [], missions: [] },
  { id: 24, title: "Here Documents", theory: [], dictionary: [], missions: [] },
  { id: 25, title: "Estructura if", theory: [], dictionary: [], missions: [] },
  { id: 26, title: "EXAMEN SECCIÓN 3: REPASO INTEGRAL", theory: [], dictionary: [], missions: [], isExam: true },
  {
    id: 27,
    title: "Entrada de Usuario: comando read",
    theory: [
      { title: "1. El comando read", content: "read es una herramienta integrada que lee una línea de la entrada estándar y asigna las palabras a variables. Si sobran palabras, se guardan en la última variable; si no hay variables, se usa REPLY." },
      { title: "2. Opciones críticas de read", content: "-p: Muestra un prompt.\n-t: Timeout en segundos.\n-s: Modo silencioso (para claves).\n-n: Lee un número exacto de caracteres sin esperar Enter." },
      { title: "3. IFS (Internal Field Separator)", content: "Define cómo se separan las palabras. Por defecto son espacios/tabs/saltos. Se puede cambiar (ej. IFS=\":\") para procesar archivos como /etc/passwd o CSV." },
      { title: "4. Validación de Entrada", content: "Nunca confíes en el usuario. Combina read con if para verificar que los datos no estén vacíos o cumplan formatos específicos." }
    ],
    dictionary: [
      { command: "read var", description: "Lee entrada y la guarda en una variable.", example: "read nombre" },
      { command: "read -p", description: "Muestra un mensaje de invitación antes de leer.", example: "read -p \"Usuario: \" user" },
      { command: "read -s", description: "Modo silencioso (no muestra lo que se escribe).", example: "read -s pass" },
      { command: "read -t", description: "Establece un tiempo límite para la respuesta.", example: "read -t 5 resp" },
      { command: "read -n", description: "Lee N caracteres y continúa automáticamente.", example: "read -n 1 opc" },
      { command: "IFS", description: "Variable que define los separadores de campos.", example: "IFS=\":\"" }
    ],
    missions: [
      { id: "l27m1", title: "La Entrevista Digital", description: "Crea entrevista.sh: Pregunta nombre, edad y ciudad en un solo comando read.", scenario: "Multi-read.", solution: "read -p \"Ingresa tu nombre, edad y ciudad: \" nombre edad ciudad", hint: "Usa read -p con 3 variables." },
      { id: "l27m2", title: "El Agente Secreto", description: "Pide usuario (normal) y clave (silenciosa con -s).", scenario: "Seguridad.", solution: "read -p \"Usuario: \" usuario; read -s -p \"Contraseña: \" clave", hint: "Usa read -s para la clave." },
      { id: "l27m3", title: "Decisión Instantánea", description: "Pregunta (s/n) y continúa al pulsar una sola tecla (-n 1).", scenario: "UX.", solution: "read -n 1 -p \"¿Deseas borrar? (s/n): \" respuesta", hint: "Usa read -n 1." },
      { id: "l27m4", title: "La Bomba de Tiempo", description: "Pide confirmación. Si pasan 5 segundos (-t 5) y no responde, lanza error.", scenario: "Time-out.", solution: "if read -t 5 -p \"Confirma: \" respuesta; then echo \"OK\"; else echo \"Lento\"; fi", hint: "if read -t 5 ..." },
      { id: "l27m5", title: "Procesador de Datos con IFS", description: "Lee 'root:x:0:0' usando IFS=':' y guarda en variables user, pass, uid, gid.", scenario: "Parsing.", solution: "IFS=\":\" read user pass uid gid <<< \"root:x:0:0\"", hint: "Asigna IFS antes de read." }
    ]
  },
  {
    id: 28,
    title: "Bucles: while y until",
    theory: [
      { title: "1. El Bucle while", content: "Repite un bloque de comandos mientras la condición sea verdadera (exit status 0). Es ideal para procesos que dependen de un estado variable." },
      { title: "2. El Bucle until", content: "Es el opuesto a while: se ejecuta HASTA que la condición sea verdadera. Es decir, se repite mientras la condición sea falsa." },
      { title: "3. break y continue", content: "break sale del bucle inmediatamente. continue salta el resto de la iteración actual y vuelve al inicio del bucle para evaluar la condición de nuevo." },
      { title: "4. Aritmética y Lectura", content: "((count++)) permite realizar incrementos numéricos fácilmente. Además, while read linea es el estándar para procesar archivos de texto línea por línea." }
    ],
    dictionary: [
      { command: "while [ c ]; do", description: "Inicia un bucle que se repite mientras la condición sea cierta.", example: "while [ $x -lt 5 ]; do" },
      { command: "until [ c ]; do", description: "Inicia un bucle que se repite hasta que la condición sea cierta.", example: "until [ -f file ]; do" },
      { command: "done", description: "Indica el final del bloque de comandos del bucle.", example: "done" },
      { command: "break", description: "Rompe y sale del bucle actual.", example: "break" },
      { command: "continue", description: "Salta a la siguiente iteración del bucle.", example: "continue" },
      { command: "(( ))", description: "Permite realizar operaciones aritméticas.", example: "((count--))" },
      { command: "sleep", description: "Detiene la ejecución durante N segundos.", example: "sleep 2" }
    ],
    missions: [
      { id: "l28m1", title: "La Cuenta Regresiva", description: "Crea despegue.sh: Bucle de 5 a 1 con while. Al final imprime '¡Ignición!'.", scenario: "while counting.", solution: "count=5; while [ $count -gt 0 ]; do echo $count; ((count--)); done; echo \"¡Ignición!\"", hint: "Usa while [ $count -gt 0 ] y ((count--))." },
      { id: "l28m2", title: "El Centinela", description: "Espera hasta que aparezca 'señal.txt'. Mientras no exista, imprime 'Esperando...' cada 2 segundos.", scenario: "until monitoring.", solution: "until [ -e señal.txt ]; do echo \"Esperando...\"; sleep 2; done", hint: "Usa until [ -e señal.txt ] y sleep 2." },
      { id: "l28m3", title: "El Menú Infinito", description: "Crea un bucle 'while true' que pida una opción y salga con 'break' si se pulsa 'q'.", scenario: "Infinite loop.", solution: "while true; do read -p \"q para salir: \" op; if [ \"$op\" = \"q\" ]; then break; fi; done", hint: "while true y break." },
      { id: "l28m4", title: "Filtrado Selectivo", description: "Cuenta del 1 al 10 pero salta el número 5 usando 'continue'.", scenario: "Bypass logic.", solution: "n=0; while [ $n -lt 10 ]; do ((n++)); if [ $n -eq 5 ]; then continue; fi; echo $n; done", hint: "Usa continue cuando n sea 5." },
      { id: "l28m5", title: "El Lector de Datos", description: "Lee el archivo 'nombres.txt' línea por línea y muestra 'Procesando: [línea]'.", scenario: "File streaming.", solution: "while read linea; do echo \"Procesando: $linea\"; done < nombres.txt", hint: "while read linea; do ... done < archivo" }
    ]
  },
  {
    id: 29,
    title: "Bucles: for",
    theory: [
      { title: "1. El Bucle for Tradicional", content: "Procesa una lista de palabras. Toma cada elemento, lo asigna a una variable y ejecuta los comandos asociados. Ideal para listas explícitas o resultados de expansión." },
      { title: "2. Comodines y Expansión", content: "Combinar for con comodines (wildcards como *) permite procesar archivos de forma masiva y segura. Bash expande los patrones antes de iniciar la iteración." },
      { title: "3. Estilo C (Aritmético)", content: "Sintaxis: for (( i=0; i<N; i++ )). Permite un control preciso sobre iteraciones numéricas, incrementos y condiciones de parada." },
      { title: "4. Rangos y Comandos", content: "Puedes usar {1..100} para generar secuencias instantáneas o $(comando) para usar la salida de otro programa como fuente de datos del bucle." }
    ],
    dictionary: [
      { command: "for var in lista; do", description: "Estructura básica de bucle sobre una lista.", example: "for i in 1 2 3; do" },
      { command: "for (( i=0; i<5; i++ ))", description: "Bucle for con sintaxis aritmética (Estilo C).", example: "for ((i=1; i<=10; i++))" },
      { command: "{1..10}", description: "Expansión de llaves para crear rangos numéricos o de letras.", example: "for i in {A..Z}" },
      { command: "*.ext", description: "Comodín para procesar todos los archivos de una extensión.", example: "for f in *.jpg" },
      { command: "basename", description: "Extrae el nombre del archivo eliminando la ruta del directorio.", example: "basename /home/user/doc.txt" }
    ],
    missions: [
      { id: "l29m1", title: "El Saludo en Serie", description: "Crea invitados.sh: Recorre Ana, Beto y Carla e imprime 'Bienvenido/a al sistema: [nombre]'.", scenario: "Explicit list.", solution: "for nombre in Ana Beto Carla; do echo \"Bienvenido/a al sistema: $nombre\"; done", hint: "for var in Ana Beto Carla; do ..." },
      { id: "l29m2", title: "El Fotógrafo Organizador", description: "Añade el prefijo 'copia_' a todos los archivos .jpg usando un bucle.", scenario: "Wildcard processing.", solution: "for imagen in *.jpg; do mv \"$imagen\" \"copia_$imagen\"; done", hint: "for imagen in *.jpg; do mv ..." },
      { id: "l29m3", title: "El Contador de Precisión", description: "Imprime los números pares del 2 al 20 usando sintaxis aritmética.", scenario: "C-style for.", solution: "for (( i=2; i<=20; i=i+2 )); do echo \"Número par: $i\"; done", hint: "for (( i=2; i<=20; i=i+2 ))" },
      { id: "l29m4", title: "Auditoría de Usuarios", description: "Recorre /home/*, extrae el nombre con basename y cuenta archivos con ls | wc -l.", scenario: "Command substitution.", solution: "for carpeta in /home/*; do usuario=$(basename \"$carpeta\"); conteo=$(ls \"$carpeta\" | wc -l); echo \"El usuario $usuario tiene $conteo archivos.\"; done", hint: "Usa basename y ls | wc -l dentro del bucle." },
      { id: "l29m5", title: "Generador de Estructuras", description: "Crea 100 carpetas llamadas 'ensayo_1' hasta 'ensayo_100' usando un rango.", scenario: "Ranges.", solution: "for i in {1..100}; do mkdir \"ensayo_$i\"; done", hint: "for i in {1..100}; do mkdir ..." }
    ]
  },
  {
    id: 30,
    title: "Depuración de Scripts",
    theory: [
      { title: "1. Errores Comunes de Sintaxis", content: "Los errores más clásicos incluyen comillas sin cerrar, estructuras incompletas (olvidar fi o done) y falta de espacios en corchetes [ ]." },
      { title: "2. Aislamiento y echo defensivo", content: "Usa comentarios (#) para aislar secciones y comandos echo estratégicos para rastrear hasta dónde llega la ejecución de tu código." },
      { title: "3. Seguimiento de Ejecución (Tracing)", content: "La opción -x (bash -x o set -x) muestra cada comando después de sus expansiones. Es vital para ver qué está pasando realmente." },
      { title: "4. Estados de Salida ($?)", content: "Comprueba siempre el éxito de comandos críticos (cd, mkdir) usando operadores como || para evitar que el script cause desastres en rutas equivocadas." }
    ],
    dictionary: [
      { command: "bash -x script.sh", description: "Ejecuta el script en modo rastreo (debug).", example: "bash -x test.sh" },
      { command: "set -x", description: "Activa el rastreo de comandos en una sección.", example: "set -x" },
      { command: "set +x", description: "Desactiva el rastreo de comandos.", example: "set +x" },
      { command: "export PS4='msg'", description: "Personaliza el prefijo de las líneas de debug.", example: "export PS4='+ L$LINENO: '" },
      { command: "|| { commands; }", description: "Operador OR: ejecuta el bloque si el anterior falla.", example: "cd dir || exit 1" },
      { command: "$LINENO", description: "Variable que contiene el número de línea actual.", example: "echo \"Error en linea $LINENO\"" }
    ],
    missions: [
      { id: "l30m1", title: "El Caso de la Comilla Perdida", description: "Corrige un script que tiene un error de comillas en un echo.", scenario: "Syntax fix.", solution: "echo \"Hola mundo\"", hint: "Asegúrate de cerrar las comillas dobles." },
      { id: "l30m2", title: "El Rastro del Crimen", description: "Ejecuta 'script.sh' usando el modo de rastreo completo de Bash.", scenario: "Tracing.", solution: "bash -x script.sh", hint: "Usa la opción -x con el comando bash." },
      { id: "l30m3", title: "Depuración Quirúrgica", description: "Activa el rastreo con set -x y desactívalo con set +x en una sección.", scenario: "Scoped debug.", solution: "set -x; echo \"Critico\"; set +x", hint: "Usa set -x seguido de set +x." },
      { id: "l30m4", title: "El Protector de Directorios", description: "Intenta entrar en 'fotos_respaldo'. Si falla, imprime 'Error' y sal con exit 1.", scenario: "Error handling.", solution: "cd fotos_respaldo || { echo \"Error\"; exit 1; }", hint: "Usa cd ... || { ... }" },
      { id: "l30m5", title: "El Inspector de Líneas", description: "Configura PS4 para que muestre el número de línea y activa el rastreo.", scenario: "Advanced PS4.", solution: "export PS4='+ Linea $LINENO: '; set -x", hint: "Define PS4 con $LINENO y luego set -x." }
    ]
  },
  {
    id: 31,
    title: "Estructura case",
    theory: [
      { title: "1. ¿Por qué usar case?", content: "Cuando tienes que evaluar una variable contra múltiples patrones (como un menú), case permite definir una lista de coincidencias de forma mucho más limpia que múltiples if." },
      { title: "2. Sintaxis y Anatomía", content: "Sintaxis:\ncase $VAR in\n  patron1) comandos ;; \n  *) default ;; \nesac\nEl ;; indica el fin del bloque del patrón y * es el comodín por defecto." },
      { title: "3. Patrones y Comodines", content: "case usa coincidencia de patrones (globbing). Puedes usar | como un O lógico (ej. *.jpg|*.png) y clases de caracteres como [0-9] o [[:alpha:]]." },
      { title: "4. Funcionamiento Interno", content: "Bash evalúa patrones de arriba hacia abajo. La primera coincidencia gana, ejecuta sus comandos y salta al final (esac). Por eso el patrón *) debe ir siempre al final." }
    ],
    dictionary: [
      { command: "case $VAR in", description: "Inicia la estructura de evaluación múltiple.", example: "case $opcion in" },
      { command: ")", description: "Cierra la definición de un patrón en case.", example: "1)" },
      { command: ";;", description: "Termina el bloque de comandos de un patrón específico.", example: "date ;;" },
      { command: "*)", description: "Patrón comodín que coincide con cualquier entrada (default).", example: "*) echo \"Error\" ;;" },
      { command: "esac", description: "Indica el fin de la estructura case.", example: "esac" },
      { command: "|", description: "Operador O lógico dentro de un patrón de case.", example: "*.jpg|*.png)" },
      { command: "${var,,}", description: "Convierte el contenido de la variable a minúsculas.", example: "case ${mes,,} in" }
    ],
    missions: [
      { id: "l31m1", title: "El Selector de Menú", description: "Crea menu.sh: Pide opción y usa case para (1) date, (2) uptime o (3) free -h.", scenario: "Menu logic.", solution: "read -p \"Elija (1, 2 o 3): \" opcion; case $opcion in 1) date ;; 2) uptime ;; 3) free -h ;; *) echo \"Error\" ;; esac", hint: "Usa case $opcion in ... esac" },
      { id: "l31m2", title: "El Reconocedor de Archivos", description: "Lee un nombre. Si es *.jpg|*.png imprime 'Imagen'. Si es *.txt imprime 'Documento'.", scenario: "Pattern globbing.", solution: "read -p \"Archivo: \" archivo; case $archivo in *.jpg|*.png) echo \"Imagen\" ;; *.txt) echo \"Documento\" ;; *) echo \"Desconocido\" ;; esac", hint: "Usa | para agrupar extensiones." },
      { id: "l31m3", title: "El Validador de Caracteres", description: "Pide una tecla (-n 1). Detecta si es [[:lower:]], [[:upper:]] o [0-9].", scenario: "Char classes.", solution: "read -n 1 -p \"Tecla: \" tecla; case $tecla in [[:lower:]]) echo \"Minúscula\" ;; [[:upper:]]) echo \"Mayúscula\" ;; [0-9]) echo \"Número\" ;; *) echo \"Especial\" ;; esac", hint: "Usa clases como [[:lower:]]." },
      { id: "l31m4", title: "Respuestas Flexibles", description: "Acepta s|S|[sS][iI] para continuar y n|N para salir.", scenario: "Flexible matching.", solution: "read -p \"Seguir? \" resp; case $resp in s|S|[sS][iI]) echo \"Si\" ;; n|N) echo \"No\" ;; *) echo \"Invalida\" ;; esac", hint: "Usa [sS][iI] para capturar si/SI/Si/sI." },
      { id: "l31m5", title: "El Organizador de Meses", description: "Pide mes. Usa ${mes,,} para convertir a minúsculas y clasifica enero|febrero|marzo como 'Invierno'.", scenario: "Lowering input.", solution: "read -p \"Mes: \" mes; case ${mes,,} in enero|febrero|marzo) echo \"Invierno\" ;; *) echo \"Otro\" ;; esac", hint: "Usa case ${mes,,} in ..." }
    ]
  },
  {
    id: 32,
    title: "Expansión de Parámetros",
    theory: [
      { title: "1. ¿Qué es la Expansión?", content: "La expansión de parámetros (${VAR}) permite aplicar transformaciones al valor de una variable antes de que la Shell lo procese." },
      { title: "2. Gestión de Vacíos", content: "Manejo de estados:\n${VAR:-default}: Usa 'default' si VAR está vacía.\n${VAR:=default}: Asigna 'default' si VAR está vacía.\n${VAR:?error}: Detiene si VAR está vacía." },
      { title: "3. Manipulación de Cadenas", content: "Recortes potentes:\n${VAR#pattern}: Quita coincidencia corta al inicio.\n${VAR##pattern}: Quita coincidencia larga al inicio.\n${VAR%pattern}: Quita coincidencia al final." },
      { title: "4. Reemplazo y Caso", content: "Formateo rápido:\n${VAR/old/new}: Reemplaza la primera vez.\n${VAR^^}: Todo a MAYÚSCULAS.\n${VAR,,}: Todo a minúsculas." }
    ],
    dictionary: [
      { command: "${VAR:-default}", description: "Usa un valor de respaldo si la variable está vacía.", example: "file=${1:-config.txt}" },
      { command: "${VAR#pattern}", description: "Elimina la coincidencia más corta desde el inicio.", example: "${FILE#*.}" },
      { command: "${VAR##pattern}", description: "Elimina la coincidencia más larga desde el inicio.", example: "${FILE##*.}" },
      { command: "${VAR%pattern}", description: "Elimina la coincidencia desde el final.", example: "${PATH%/*}" },
      { command: "${VAR/old/new}", description: "Reemplaza el texto 'old' por 'new'.", example: "${STR/error/fix}" },
      { command: "${VAR^^}", description: "Convierte el contenido a mayúsculas.", example: "${NAME^^}" },
      { command: "${#VAR}", description: "Devuelve la longitud (número de caracteres) de la variable.", example: "${#password}" }
    ],
    missions: [
      { id: "l32m1", title: "El Seguro contra Vacíos", description: "Pide 'entrada'. Si está vacía, guarda 'datos.txt' en la variable 'archivo'.", scenario: "Default values.", solution: "read -p \"Archivo: \" entrada; archivo=${entrada:-datos.txt}; echo \"Procesando $archivo\"", hint: "Usa archivo=${entrada:-datos.txt}" },
      { id: "l32m2", title: "El Extractor de Extensiones", description: "Extrae solo la extensión (pdf) de 'reporte.final.pdf' usando ##.", scenario: "Long prefix removal.", solution: "ARCHIVO=\"reporte.final.pdf\"; EXT=${ARCHIVO##*.}; echo \"$EXT\"", hint: "Usa ${ARCHIVO##*.}" },
      { id: "l32m3", title: "Limpiador de Rutas", description: "Extrae el directorio de '/usr/local/bin/python' eliminando lo que sigue al último /.", scenario: "Suffix removal.", solution: "RUTA=\"/usr/local/bin/python\"; DIR=${RUTA%/*}; echo \"$DIR\"", hint: "Usa ${RUTA%/*}" },
      { id: "l32m4", title: "El Transformador de Datos", description: "En 'TEXTO', cambia 'error' por 'alerta' y convierte todo a MAYÚSCULAS.", scenario: "Replace and Case.", solution: "NUEVO=${TEXTO/error/alerta}; echo ${NUEVO^^}", hint: "Usa ${TEXTO/error/alerta} y luego ^^." },
      { id: "l32m5", title: "El Validador de Longitud", description: "Pide 'pass'. Si su longitud es menor a 8 (-lt 8), imprime 'Baja'.", scenario: "Length check.", solution: "read -s -p \"Pass: \" pass; if [ ${#pass} -lt 8 ]; then echo \"Baja\"; fi", hint: "Usa ${#pass} para contar." }
    ]
  },
  {
    id: 33,
    title: "Aritmética en la Shell",
    theory: [
      { title: "1. Expansión Aritmética $(( ))", content: "Es la forma principal de realizar cálculos en Bash. Todo lo que esté dentro se evalúa matemáticamente. No requiere el signo $ para las variables internas: $((var1 + var2))." },
      { title: "2. Operadores Básicos y Potencia", content: "Soporta +, -, *, / (entera), % (resto) y ** (potencia). Ej: $((2**3)) es 8." },
      { title: "3. La Limitación de los Enteros", content: "Bash no maneja decimales de forma nativa. $((5 / 2)) devuelve 2. Para precisión decimal se utiliza la herramienta externa bc." },
      { title: "4. Uso de bc para Precisión", content: "bc es una calculadora que recibe texto mediante tuberías. scale=N define el número de decimales: echo \"scale=2; 5/2\" | bc" }
    ],
    dictionary: [
      { command: "$(( ))", description: "Sintaxis para evaluar expresiones matemáticas enteras.", example: "$((a + b))" },
      { command: "**", description: "Operador de exponenciación (potencia).", example: "$((2**10))" },
      { command: "%", description: "Operador módulo: devuelve el resto de la división.", example: "$((10 % 3))" },
      { command: "+=", description: "Asignación compuesta: suma y asigna a la variable.", example: "((PUNTOS += 5))" },
      { command: "bc", description: "Calculadora de precisión arbitraria externa.", example: "echo \"5/2\" | bc" },
      { command: "scale", description: "Variable de bc que define el número de decimales.", example: "echo \"scale=2; 1/3\" | bc" }
    ],
    missions: [
      { id: "l33m1", title: "La Calculadora Básica", description: "Pide dos números y muestra suma, multiplicación y el resto (%) usando $(( )).", scenario: "Integer arithmetic.", solution: "read -p \"N1: \" n1; read -p \"N2: \" n2; echo $((n1 + n2)); echo $((n1 * n2)); echo $((n1 % n2))", hint: "Usa $((n1 + n2)), $((n1 * n2)) y $((n1 % n2))." },
      { id: "l33m2", title: "El Acumulador Táctico", description: "Inicia PUNTOS=0 y en un bucle suma las entradas del usuario usando ((PUNTOS += entrada)).", scenario: "Compound assignment.", solution: "PUNTOS=0; i=1; while [ $i -le 3 ]; do read -p \"Puntos: \" entrada; ((PUNTOS += entrada)); ((i++)); done; echo $PUNTOS", hint: "Usa ((PUNTOS += entrada)) dentro del bucle." },
      { id: "l33m3", title: "Desafío de Potencia", description: "Calcula bytes en 'gb' GB usando $((gb * (2**30))).", scenario: "Exponentiation.", solution: "read -p \"GB: \" gb; bytes=$((gb * (2**30))); echo $bytes", hint: "Usa the operator ** for power." },
      { id: "l33m4", title: "Rompiendo el Límite", description: "Calcula el área de un círculo (PI * r * r) con 2 decimales usando echo \"scale=2; ...\" | bc.", scenario: "Decimal precision.", solution: "read -p \"R: \" r; PI=3.1416; AREA=$(echo \"scale=2; $PI * ($r * $r)\" | bc); echo $AREA", hint: "Usa scale=2 y bc." },
      { id: "l33m5", title: "El Validador de Pares", description: "Usa if [ $((n % 2)) -eq 0 ] para decir si un número es PAR.", scenario: "Arithmetic logic.", solution: "read -p \"N: \" n; if [ $((n % 2)) -eq 0 ]; then echo \"PAR\"; else echo \"IMPAR\"; fi", hint: "Evalúa $((n % 2)) dentro de los corchetes del if." }
    ]
  },
  {
    id: 34,
    title: "Parámetros Posicionales",
    theory: [
      { title: "1. ¿Qué son los Parámetros Posicionales?", content: "Son variables especiales ($1, $2...) asignadas automáticamente cuando ejecutas un script seguido de argumentos. $0 contiene el nombre del script." },
      { title: "2. Variables de Control", content: "$#: El número total de argumentos.\n$@: Todos los argumentos (individuales).\n$*: Todos los argumentos (como una sola cadena)." },
      { title: "3. El comando shift", content: "Desplaza los parámetros hacia la izquierda: $2 pasa a ser $1, $3 a $2, etc. Ideal para procesar listas largas en bucles." },
      { title: "4. PID y Estado de Salida", content: "$?: El estado de salida del último comando (0 es éxito).\n$$: El PID del proceso actual (útil para archivos temporales únicos)." }
    ],
    dictionary: [
      { command: "$1, $2...", description: "Parámetros posicionales que capturan los argumentos del script.", example: "echo \"Hola $1\"" },
      { command: "$#", description: "Variable que contiene el número total de argumentos pasados.", example: "if [ $# -lt 2 ]" },
      { command: "$@", description: "Representa todos los parámetros como elementos separados.", example: "for arg in \"$@\"" },
      { command: "shift", description: "Desplaza los parámetros una posición a la izquierda.", example: "shift" },
      { command: "$0", description: "Variable que contiene el nombre del script en ejecución.", example: "echo \"Uso: $0 archivo\"" },
      { command: "$?", description: "Estado de salida del último comando ejecutado.", example: "if [ $? -eq 0 ]" },
      { command: "$$", description: "PID (ID de proceso) del script actual.", example: "echo \"PID: $$\"" }
    ],
    missions: [
      { id: "l34m1", title: "El Receptor de Datos", description: "Crea usuario.sh: Acepta $1 (nombre), $2 (apellido) y $3 (profesión) e imprímelos.", scenario: "Positional mapping.", solution: "echo \"Registro: $1 $2, Profesión: $3\"", hint: "Usa $1, $2 y $3." },
      { id: "l34m2", title: "El Validador de Argumentos", description: "Si $# es menor a 3, imprime ayuda usando $0 y sal con exit 1.", scenario: "Argument count check.", solution: "if [ $# -lt 3 ]; then echo \"Uso: $0 NOMBRE APELLIDO PROFESION\"; exit 1; fi; echo \"Registro: $1 $2, Profesión: $3\"", hint: "Usa if [ $# -lt 3 ]." },
      { id: "l34m3", title: "Procesador Masivo con shift", description: "Usa 'while [ $# -gt 0 ]' y 'shift' para imprimir cada argumento ($1) uno por uno.", scenario: "Shifting parameters.", solution: "count=1; while [ $# -gt 0 ] ; do echo \"Arg $count: $1\"; shift; ((count++)); done", hint: "No olvides poner shift dentro del bucle." },
      { id: "l34m4", title: "El Bucle de Argumentos Especial", description: "Recorre todos los argumentos usando 'for arg in \"$@\"' e imprímelos.", scenario: "Array-like expansion.", solution: "for arg in \"$@\"; do echo \"Elemento: $arg\"; done", hint: "Usa \"$@\" con comillas." },
      { id: "l34m5", title: "El Clonador Inteligente", description: "Si -f \"$1\" existe, crea una copia añadiendo la fecha: cp \"$1\" \"$(date +%Y-%m-%d)-$1\".", scenario: "Dynamic backup.", solution: "if [ -f \"$1\" ]; then FECHA=$(date +%Y-%m-%d); cp \"$1\" \"${FECHA}-$1\"; echo \"OK\"; else echo \"Error\"; fi", hint: "Usa cp \"$1\" y ${FECHA}." }
    ]
  },
  {
    id: 35,
    title: "Funciones",
    theory: [
      { title: "1. ¿Qué es una Función?", content: "Una función es un bloque de código al que se le asigna un nombre para ser ejecutado repetidamente. Debe definirse antes de ser llamada." },
      { title: "2. Variables Locales vs. Globales", content: "Por defecto, las variables son globales. Usa 'local var=\"val\"' dentro de funciones para restringir el ámbito y evitar colisiones." },
      { title: "3. Parámetros en Funciones", content: "Las funciones reciben sus propios argumentos mediante $1, $2, etc. El $1 de la función es distinto al $1 del script principal." },
      { title: "4. Estado de Salida (return)", content: "Las funciones usan 'return' (0-255) en lugar de 'exit'. El resultado se consulta con $? después de la ejecución." }
    ],
    dictionary: [
      { command: "func_name () { }", description: "Sintaxis estándar para definir una función.", example: "limpiar () { rm *.tmp; }" },
      { command: "local", description: "Declara variables privadas dentro de una función.", example: "local temp=\"/tmp/f\"" },
      { command: "return", description: "Finaliza la función y devuelve un código de estado numérico.", example: "return 0" },
      { command: "source", description: "Carga archivos de funciones (librerías) en el entorno actual.", example: "source ./tools.sh" },
      { command: "unset -f", description: "Elimina la definición de una función específica.", example: "unset -f mi_func" }
    ],
    missions: [
      { id: "l35m1", title: "La Función de Saludo Modular", description: "Define 'mostrar_encabezado () { ... }' que imprima el script ($0) y llámala.", scenario: "Function call.", solution: "mostrar_encabezado () { echo \"Script: $0\"; }; mostrar_encabezado", hint: "Usa mostrar_encabezado () { ... } y llámala por su nombre." },
      { id: "l35m2", title: "El Argumentador de Funciones", description: "Crea 'verificar_archivo' que reciba $1 y use [ -e \"$1\" ] para imprimir si existe.", scenario: "Parameters.", solution: "verificar_archivo () { if [ -e \"$1\" ]; then echo \"Si\"; else echo \"No\"; fi; }; verificar_archivo \"/etc/passwd\"", hint: "Usa $1 dentro de la función." },
      { id: "l35m3", title: "El Muro de Contención", description: "Crea una función que use 'local NOMBRE=\"Local\"' y muéstrala.", scenario: "Local scope.", solution: "NOMBRE=\"Global\"; scope () { local NOMBRE=\"Local\"; echo \"$NOMBRE\"; }; scope; echo \"$NOMBRE\"", hint: "Usa local NOMBRE=\"Local\"." },
      { id: "l35m4", title: "La Calculadora de Retorno", description: "Función 'es_raiz' que retorne 0 si EuID es 0, sino 1.", scenario: "Return values.", solution: "es_raiz () { if [ \"$EuID\" -eq 0 ]; then return 0; else return 1; fi; }; if es_raiz; then echo \"Root\"; fi", hint: "Usa return 0 o return 1." },
      { id: "l35m5", title: "Biblioteca de Funciones", description: "Carga el archivo 'herramientas.sh' usando el comando source.", scenario: "Libraries.", solution: "source ./herramientas.sh", hint: "Usa source o el punto (.)" }
    ]
  },
  {
    id: 36,
    title: "Multimedia y GUI en Scripts",
    theory: [
      { title: "1. Manipulación de Imágenes (ImageMagick)", content: "identify: Muestra metadatos (resolución, formato).\nconvert: Herramienta multiusos para redimensionar, rotar y convertir formatos.\nmogrify: Procesa archivos sobrescribiendo el original." },
      { title: "2. Documentos PDF", content: "enscript: Convierte texto plano en PostScript/PDF con formato profesional.\npdftk: La herramienta definitiva para unir (cat), separar o rotar archivos PDF." },
      { title: "3. Interfaces Gráficas (Zenity)", content: "Permite lanzar diálogos GTK (calendarios, selección de archivos, notificaciones) desde la terminal y capturar la respuesta del usuario." },
      { title: "4. Orquestación y Escritorio", content: "La potencia real reside en combinar estas herramientas: generar informes PDF, procesar imágenes de soporte y notificar visualmente al finalizar." }
    ],
    dictionary: [
      { command: "identify", description: "Muestra información detallada sobre archivos de imagen.", example: "identify foto.png" },
      { command: "convert", description: "Transforma, redimensiona y convierte formatos de imagen.", example: "convert f.png -resize 50% f.jpg" },
      { command: "enscript", description: "Convierte archivos de texto plano a formato PostScript.", example: "enscript -p out.ps file.txt" },
      { command: "pdftk", description: "Herramienta de manipulación de PDF (unir, separar, rotar).", example: "pdftk A.pdf B.pdf cat output final.pdf" },
      { command: "zenity", description: "Muestra cuadros de diálogo gráficos desde la Shell.", example: "zenity --info --text='Hola'" },
      { command: "lp", description: "Envía un archivo a la cola de impresión.", example: "lp documento.pdf" }
    ],
    missions: [
      { id: "l36m1", title: "El Optimizador de Imágenes", description: "Recorre todos los *.jpg y usa 'convert' para redimensionarlos a '200x' con prefijo 'thumb_'.", scenario: "Batch resizing.", solution: "for img in *.jpg; do convert \"$img\" -resize 200x \"thumb_$img\"; done", hint: "Usa convert \"$img\" -resize 200x ..." },
      { id: "l36m2", title: "De Código a Documento", description: "Convierte 'script.sh' a PDF con encabezado 'Código' usando 'enscript | ps2pdf'.", scenario: "Text to PDF.", solution: "enscript -b \"Código\" -p - script.sh | ps2pdf - script.pdf", hint: "Usa enscript -b ... -p - ... | ps2pdf - ..." },
      { id: "l36m3", title: "El Archivista de PDF", description: "Une 'portada.pdf' y 'contenido.pdf' en 'final.pdf' usando pdftk.", scenario: "Merging PDFs.", solution: "pdftk portada.pdf contenido.pdf cat output final.pdf", hint: "Usa pdftk ... cat output final.pdf" },
      { id: "l36m4", title: "Interfaz de Selección", description: "Usa 'zenity --file-selection' y guarda la ruta en 'ARCHIVO', luego muestra '--info'.", scenario: "GUI interaction.", solution: "ARCHIVO=$(zenity --file-selection); if [ -n \"$ARCHIVO\" ]; then zenity --info --text=\"$ARCHIVO\"; fi", hint: "Usa zenity --file-selection y zenity --info." },
      { id: "l36m5", title: "Notificador de Sistema", description: "Envía una notificación visual con 'zenity --notification' cuando termine un proceso.", scenario: "Desktop alerts.", solution: "sleep 1; zenity --notification --text=\"Finalizado\"", hint: "Usa zenity --notification." }
    ]
  },
  {
    id: 37,
    title: "Arrays en Bash",
    theory: [
      { title: "1. ¿Qué es un Array?", content: "Un array es una variable que contiene una lista de datos. En Bash son unidimensionales y los índices comienzan en 0. No requieren definir el tamaño de antemano." },
      { title: "2. Creación y Asignación", content: "Asignación compuesta: distros=(Ubuntu Fedora Debian)\nAsignación individual: distros[0]=\"Ubuntu\"\nAñadir elementos: array+=(nuevo_elemento)" },
      { title: "3. Acceso a los Elementos", content: "Es obligatorio usar llaves {}. \n${array[i]}: Accede al elemento i.\n${array[@]}: Expande todos los elementos.\n${#array[@]}: Devuelve el número total de elementos." },
      { title: "4. Operaciones Avanzadas", content: "unset array[1]: Elimina el segundo elemento.\n${!array[@]}: Devuelve todos los índices ocupados.\n${array[@]:1:2}: Extrae un subconjunto (slice)." }
    ],
    dictionary: [
      { command: "array=(v1 v2)", description: "Crea un array con valores iniciales.", example: "colores=(Rojo Verde)" },
      { command: "${array[0]}", description: "Accede al primer elemento del array.", example: "echo ${distros[0]}" },
      { command: "${array[@]}", description: "Expande todos los elementos del array.", example: "for i in \"${a[@]}\"" },
      { command: "${#array[@]}", description: "Devuelve la cantidad de elementos en el array.", example: "echo ${#nums[@]}" },
      { command: "${!array[@]}", description: "Devuelve la lista de todos los índices del array.", example: "echo ${!servicios[@]}" },
      { command: "unset array[n]", description: "Elimina un elemento específico del array por su índice.", example: "unset file_list[2]" }
    ],
    missions: [
      { id: "l37m1", title: "La Lista de Invitados", description: "Crea 'invitados=(Alex Maria Juan Luis)'. Imprime el primero y el número total.", scenario: "Array basics.", solution: "invitados=(Alex Maria Juan Luis); echo ${invitados[0]}; echo ${#invitados[@]}", hint: "Usa ${invitados[0]} y ${#invitados[@]}." },
      { id: "l37m2", title: "El Selector de Frutas", description: "Crea un array de 5 frutas y recórrelo con un bucle for imprimiendo cada una.", scenario: "Iterating arrays.", solution: "frutas=(Manzana Pera Piña Uva Kiwi); for fruta in \"${frutas[@]}\"; do echo $fruta; done", hint: "Usa for fruta in \"${frutas[@]}\"." },
      { id: "l37m3", title: "Auditoría de Directorios", description: "Guarda los archivos del directorio (*) en 'archivos'. Imprime el total y el tercero.", scenario: "Command expansion to array.", solution: "archivos=( * ); echo ${#archivos[@]}; echo ${archivos[2]}", hint: "Usa archivos=( * )." },
      { id: "l37m4", title: "Manipulación Dinámica", description: "Inicia nums=(10 20 30). Añade 40, elimina el 20 (índice 1) e imprime todo.", scenario: "Add/Delete elements.", solution: "nums=(10 20 30); nums+=(40); unset nums[1]; echo ${nums[@]}", hint: "Usa += y unset." },
      { id: "l37m5", title: "El Menú de Índices", description: "Usa ${!servicios[@]} para imprimir los índices y valores de (web db mail backup).", scenario: "Keys and values.", solution: "servicios=(web db mail backup); for i in \"${!servicios[@]}\"; do echo \"$i: ${servicios[$i]}\"; done", hint: "Usa ${!servicios[@]} en el for." }
    ]
  },
  {
    id: 38,
    title: "Editor de Flujo (sed)",
    theory: [
      { title: "1. ¿Qué es un Editor de Flujo?", content: "sed funciona de forma no interactiva. Lee una línea, aplica un comando y envía el resultado a la salida estándar. Ideal para automatizar cambios masivos en archivos." },
      { title: "2. La Anatomía del Comando sed", content: "Sintaxis: sed 's/buscar/reemplazar/g' archivo\n's': Sustitución.\n'/': Delimitadores (puedes usar | o _).\n'g': Flag global para cambiar todas las ocurrencias." },
      { title: "3. Direccionamiento y Selección", content: "sed '1,5s/A/B/': Líneas 1 a 5.\nsed '/error/s/A/B/': Solo líneas con 'error'.\n'$': Representa la última línea del archivo." },
      { title: "4. Edición In-place (-i)", content: "El flag -i guarda cambios directamente. Se recomienda usar -i.bak para crear una copia de seguridad automática antes de modificar." }
    ],
    dictionary: [
      { command: "s/old/new/g", description: "Comando de sustitución global en una línea.", example: "sed 's/A/B/g'" },
      { command: "d", description: "Elimina líneas específicas del flujo.", example: "sed '5d' config" },
      { command: "i", description: "Inserta texto antes de una línea específica.", example: "sed '1i Título' file" },
      { command: "a", description: "Añade texto después de una línea específica.", example: "sed '$a Fin' file" },
      { command: "-n", description: "Suprime la salida automática (usar con p para imprimir líneas).", example: "sed -n '1,5p' log" },
      { command: "-i", description: "Edita el archivo original (in-place).", example: "sed -i 's/A/B/' f" }
    ],
    missions: [
      { id: "l38m1", title: "El Corrector de Errores", description: "Cambia 'Servidro' por 'Servidor' en todo el archivo 'config.txt'.", scenario: "Global substitution.", solution: "sed 's/Servidro/Servidor/g' config.txt", hint: "Usa sed 's/Servidro/Servidor/g' config.txt" },
      { id: "l38m2", title: "Limpieza de Comentarios", description: "Elimina todas las líneas que empiecen por # en 'archivo.conf'.", scenario: "Pattern deletion.", solution: "sed '/^#/d' archivo.conf", hint: "Usa sed '/^#/d' archivo.conf" },
      { id: "l38m3", title: "El Editor de Rutas", description: "Cambia '/usr/bin' por '/usr/local/bin' usando '|' como delimitador.", scenario: "Alternative delimiters.", solution: "sed 's|/usr/bin|/usr/local/bin|g' archivo", hint: "Usa sed 's|/usr/bin|/usr/local/bin|g' archivo" },
      { id: "l38m4", title: "Extracción de Rango", description: "Imprime únicamente las líneas 50 a 60 de 'sistema.log' usando -n.", scenario: "Range extraction.", solution: "sed -n '50,60p' sistema.log", hint: "Usa sed -n '50,60p' sistema.log" },
      { id: "l38m5", title: "Edición Directa con Backup", description: "Cambia 'Desactivado' por 'Activado' en 'web.conf' creando copia .bak.", scenario: "In-place backup.", solution: "sed -i.bak 's/Desactivado/Activado/g' web.conf", hint: "Usa sed -i.bak 's/Desactivado/Activado/g' web.conf" }
    ]
  },
  {
    id: 39,
    title: "Procesamiento con awk",
    theory: [
      { title: "1. ¿Qué es Awk?", content: "Awk es un lenguaje para procesar archivos organizados en columnas (campos) y filas (registros). Entiende de forma nativa que el texto tiene estructura." },
      { title: "2. Estructura de Awk", content: "BEGIN { ... }: Ejecuta una vez antes de leer.\n{ patrón { acción } }: Ejecuta por cada línea coincidente.\nEND { ... }: Ejecuta una vez al final." },
      { title: "3. Variables Especiales", content: "$1, $2: Columnas.\n$0: Línea completa.\nNF: Número de columnas.\nNR: Número de línea actual.\nFS: Separador de campos." },
      { title: "4. Lógica y Formateo", content: "Permite usar 'if/else' internos y 'printf' para salidas alineadas y profesionales." }
    ],
    dictionary: [
      { command: "awk '{ print $1 }'", description: "Muestra la primera columna de un archivo.", example: "awk '{print $1}' file" },
      { command: "-F", description: "Define un separador de campos personalizado.", example: "awk -F':' '{print $1}'" },
      { command: "BEGIN { }", description: "Bloque de código que se ejecuta al inicio.", example: "awk 'BEGIN {print \"Título\"}'" },
      { command: "END { }", description: "Bloque de código que se ejecuta al final.", example: "awk 'END {print \"Fin\"}'" },
      { command: "printf", description: "Salida de texto formateada con alineación.", example: "awk '{printf \"%-10s %d\", $1, $2}'" },
      { command: "length()", description: "Calcula la longitud de una cadena de texto.", example: "awk 'length($0) > 80'" }
    ],
    missions: [
      { id: "l39m1", title: "El Extractor de Usuarios", description: "Extrae usuario ($1) y shell ($7) de /etc/passwd usando ':' como separador.", scenario: "Field extraction.", solution: "awk -F\":\" '{ print \"Usuario: \" $1 \"\\t Shell: \" $7 }' /etc/passwd", hint: "Usa awk -F\":\" y print." },
      { id: "l39m2", title: "El Auditor de Espacio", description: "Usa ls -l y awk para mostrar archivos ($9) cuyo tamaño ($5) supere 1,048,576 bytes.", scenario: "Numeric filtering.", solution: "ls -l | awk '$5 > 1048576 { print $9 }'", hint: "Usa ls -l | awk '$5 > 1048576 ...'" },
      { id: "l39m3", title: "Reportes Profesionales", description: "Crea reporte con encabezado BEGIN, datos, y conteo total en END.", scenario: "BEGIN/END blocks.", solution: "ls -l | awk 'BEGIN { print \"--- REPORTE ---\" } { print $9, $5; count++ } END { print \"Total de archivos: \" count-1 }'", hint: "Usa BEGIN, END y una variable count." },
      { id: "l39m4", title: "Formateo con printf", description: "Alinea nombres (15 espacios) y precios (decimales 8.2f) de 'lista.txt'.", scenario: "Formatted output.", solution: "awk '{ printf \"%-15s %8.2f\\n\", $1, $2 }' lista.txt", hint: "Usa printf \"%-15s %8.2f\\n\"." },
      { id: "l39m5", title: "El Analista de Logs", description: "Busca errores 404 en la columna 9 e imprime la IP de la columna 1 en 'access.log'.", scenario: "Log searching.", solution: "awk '$9 == 404 { print $1 }' access.log", hint: "Usa awk '$9 == 404 ...'" }
    ]
  },
  {
    id: 40,
    title: "CERTIFICACIÓN FINAL: EL GRAN ARQUITECTO",
    isExam: true,
    theory: [
      { title: "RESUMEN TÉCNICO (CAP. 25 - 37)", content: "25: Interacción (read -p, -s, -t)\n26: Bucles I (while, until, sleep)\n27: Bucles II (for in lista)\n28: Depuración (set -x, bash -x)\n29: Lógica (case...esac)\n30: Expansión (${VAR#*.}, ${VAR^^})\n31: Aritmética ($(( )), bc)\n32: Parámetros ($1, $#, $@, shift)\n33: Funciones (local, return)\n34: Multimedia (convert, identify, zenity)\n35: Arrays (arr=(v1), ${arr[@]})\n36: Sed (s/buscar/reemplazar/)\n37: Awk (columnas, BEGIN, END)" },
      { title: "PROYECTO: LINCE DE DATOS", content: "Debes automatizar un sistema de procesamiento de medios y logs que combine orquestación de parámetros, filtrado de datos y notificaciones visuales." }
    ],
    dictionary: [
      { command: "identify", description: "Extrae metadatos de imágenes.", example: "identify foto.jpg" },
      { command: "zenity", description: "Lanza ventanas gráficas.", example: "zenity --info --text='Ok'" },
      { command: "awk", description: "Procesador de columnas.", example: "awk '{s+=$1} END {print s}'" },
      { command: "sed", description: "Editor de flujo.", example: "sed 's/A/B/g'" }
    ],
    missions: [
      { id: "exam4_m1", title: "Recepción e Interacción", description: "Crea DIR=${1}. Si está vacío, usa 'read -t 10 -p' para pedir la ruta.", scenario: "Argument or timed read.", solution: "DIR=${1:-$(read -t 10 -p \"¿Carpeta? \" r; echo $r)}", hint: "Usa ${1:-$(read -t 10 ...)}" },
      { id: "exam4_m2", title: "Validación y Lógica", description: "Verifica si DIR existe y usa case para elegir [R]eporte, [L]impieza o [Q]uit.", scenario: "Menu with directory check.", solution: "if [ -d \"$DIR\" ]; then case $OPC in [RLQ]) echo \"OK\" ;; esac; fi", hint: "Usa if [ -d ... ] y case $OPC in [RLQ])" },
      { id: "exam4_m3", title: "Procesamiento de Imágenes", description: "Usa for en *.jpg e identify para guardar resoluciones en datos_raw.txt.", scenario: "Batch identify.", solution: "for img in *.jpg; do identify \"$img\" >> datos_raw.txt; done", hint: "for img in *.jpg; do identify ... >> datos_raw.txt; done" },
      { id: "exam4_m4", title: "Cirugía de Texto y Columnas", description: "Usa Sed para quitar 'pixels' y Awk para sumar Ancho*Alto (col1*col2).", scenario: "Text/Column manipulation.", solution: "sed 's/pixels//g' datos_raw.txt | awk '{s+=$1*$2} END {print s/NR}'", hint: "sed 's/pixels//g' | awk '{s+=$1*$2} END {print s/NR}'" },
      { id: "exam4_m5", title: "Organización y Arrays", description: "Función 'crear_lista' que guarde *.jpg en un Array e imprímelo con ${a[@]}.", scenario: "Functions and Arrays.", solution: "crear_lista() { archivos=(*.jpg); }; crear_lista; echo ${archivos[@]}", hint: "Usa archivos=(*.jpg) y ${archivos[@]}." },
      { id: "exam4_m6", title: "El Toque Maestro", description: "Muestra nombre en MAYÚSCULAS y lanza Zenity indicando archivos procesados.", scenario: "Expansion and GUI.", solution: "echo ${F^^}; zenity --info --text=\"Proceso completado: ${#archivos[@]} archivos\"", hint: "Usa ${F^^} y zenity --info." }
    ]
  }
];
