let userName = '';
let isChatOpen = false; // Variable para controlar el estado del chat
let previousMenus = []; // Usar un array para almacenar el historial de menús
let selections = []; // Array para almacenar las selecciones

const chatIcon = document.getElementById('chat-icon');
const chatbot = document.getElementById('chatbot');
const sendButton = document.getElementById('send-button');
const userInput = document.getElementById('user-input');
const chatBody = document.getElementById('chat-body');

// Ocultar el chatbot inicialmente
chatbot.style.display = 'none';

// Mostrar o cerrar el chatbot al hacer clic en el ícono
chatIcon.addEventListener('click', () => {
    if (!isChatOpen) {
        chatbot.style.display = 'block'; // Mostrar el chatbot
        isChatOpen = true; // Cambiar el estado a abierto
        
        // Limpiar el historial de chat antes de preguntar el nombre
        chatBody.innerHTML = ''; 

        if (userName === '') {
            askForName(); // Preguntar el nombre si no se ha ingresado
        } else {
            showMenu(); // Mostrar el menú principal
        }
    } else {
        chatbot.style.display = 'none'; // Ocultar el chatbot
        isChatOpen = false; // Cambiar el estado a cerrado
    }
});

// Pedir el nombre del usuario
function askForName() {
    chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Hola! Soy Eva, tu asistente virtual. Antes de comenzar, ¿Cuál es tu nombre?</div>`;
    chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo
}

// Enviar el mensaje al hacer clic en el botón
sendButton.addEventListener('click', handleUserMessage);

// Enviar el mensaje al presionar "Enter"
userInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        handleUserMessage();
    }
});

function handleUserMessage() {
    const userMessage = userInput.value;
    if (userMessage) {
        // Si el nombre no ha sido ingresado, guardarlo
        if (userName === '') {
            userName = userMessage;
            chatBody.innerHTML += `<div class="chat-message user-message"><strong>${userName}:</strong> ${userMessage}</div>`;
            chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Encantada de conocerte, ${userName}! ¿En qué puedo ayudarte?</div>`;
            showMenu(); // Mostrar menú después de que el usuario ingresa su nombre
        } else {
            chatBody.innerHTML += `<div class="chat-message user-message"><strong>${userName}:</strong> ${userMessage}</div>`;
            setTimeout(() => {
                chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Respuesta automática</div>`;
                chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo
            }, 1000);
        }

        userInput.value = ''; // Limpiar el campo de entrada
    }
}


// Función para mostrar el menú de opciones
function showMenu() {
    previousMenus.push(chatBody.innerHTML); // Guardar el menú actual
    chatBody.innerHTML = `
        <div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Encantada de conocerte, ${userName}! ¿En que puedo ayudarte?</div>
        <div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Elige una opción:</div>
        <button class="menu-button" onclick="selectOption('SERVICIOS')">1- SERVICIOS</button>
        <button class="menu-button" onclick="selectOption('INVESTIGACIONES')">2- INVESTIGACIONES</button>
        <button class="menu-button" onclick="selectOption('REPORTES')">3- REPORTES</button>
        <button class="menu-button" onclick="selectOption('RENOVACIONES')">4- RENOVACIONES</button>
        <button class="menu-button" onclick="selectOption('FACTURACIÓN')">5- FACTURACIÓN</button>
        <button class="menu-button" onclick="selectOption('JURÍDICO')">6- JURÍDICO</button>
        <button class="menu-button" onclick="selectOption('ARRENDAPP')">7- ARRENDAPP</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">CONTACTANOS</button>
    `;
    chatBody.scrollTop = 0; // Desplazar hacia arriba al inicio
}

// Función para manejar la selección de opciones
function selectOption(optionText) {
    previousMenus.push(chatBody.innerHTML); // Guardar el menú actual
    chatBody.innerHTML = ''; // Limpiar el contenido del chat
    chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Has seleccionado ${optionText}. Por favor, elige una subopción:</div>`;
    chatBody.innerHTML += generateSubMenu(optionText);
    
    chatBody.scrollTop = 0; // Desplazar hacia arriba al inicio
}

// Generar submenú según la opción seleccionada
function generateSubMenu(optionText) {
    switch (optionText) {
        case 'SERVICIOS':
            return generateServiceSubMenu();
        case 'INVESTIGACIONES':
            return generateInvestigationSubMenu();
        case 'REPORTES':
            return generateReportSubMenu();
        case 'RENOVACIONES':
            return generateRenewalSubMenu();
        case 'FACTURACIÓN':
            return generateBillingSubMenu();
        case 'JURÍDICO':
            return generateLegalSubMenu();
        case 'ARRENDAPP':
            return generateArrendappSubMenu();
        default:
            return '';
    }
}

// Generar submenús para cada opción
// Generar submenús para cada opción
function generateServiceSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('11')">1.1 Información de sus servicios</button>
        <button class="menu-button" onclick="handleSubOption('12')">1.2 Costos de servicios</button>
        <button class="menu-button" onclick="handleSubOption('13')">1.3 Coberturas legales (pólizas jurídicas)</button>
        <button class="menu-button" onclick="handleSubOption('14')">1.4 ¿Tienen garantía de pago de rentas?</button>
        <button class="menu-button" onclick="handleSubOption('15')">1.5 ¿Cuánto tiempo dura el trámite?</button>
        <button class="menu-button" onclick="handleSubOption('16')">1.6 ¿Cómo se realiza la firma de los contratos?</button>
        <button class="menu-button" onclick="handleSubOption('17')">1.7 ¿Cuáles son sus horarios de servicio?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">1.8 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateInvestigationSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('21')">2.1 ¿Cómo puedo asegurarme de que no usarán mis datos con fines lucrativos?</button>
        <button class="menu-button" onclick="handleSubOption('22')">2.2 ¿En qué consiste la investigación?</button>
        <button class="menu-button" onclick="handleSubOption('23')">2.3 ¿Por qué no se reembolsa el pago del anticipo?</button>
        <button class="menu-button" onclick="handleSubOption('24')">2.4 ¿Por qué es necesario hacer las llamadas con mis referencias?</button>
        <button class="menu-button" onclick="handleSubOption('25')">2.5 ¿Cuál es el proceso de la póliza?</button>
        <button class="menu-button" onclick="handleSubOption('26')">2.6 ¿Qué beneficios obtengo al adquirir una póliza jurídica de arrendamiento?</button>
        <button class="menu-button" onclick="handleSubOption('27')">2.7 ¿Estará conmigo alguien durante el proceso?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">2.8 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateReportSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('31')">3.1 ¿Cómo debo realizar un reporte?</button>
        <button class="menu-button" onclick="handleSubOption('32')">3.2 ¿Qué hago si mi inquilino no me ha pagado la renta?</button>
        <button class="menu-button" onclick="handleSubOption('33')">3.3 ¿Qué hago si mi propietario no responde y el inmueble tiene fallas?</button>
        <button class="menu-button" onclick="handleSubOption('34')">3.4 ¿Qué pasa si el inquilino no se quiere salir del inmueble?</button>
        <button class="menu-button" onclick="handleSubOption('35')">3.5 ¿Dónde puedo comunicarme con ustedes?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">3.6 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateRenewalSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('41')">4.1 ¿Cuál es el proceso de renovación?</button>
        <button class="menu-button" onclick="handleSubOption('42')">4.2 ¿A dónde debo contactarme para tramitar mi renovación?</button>
        <button class="menu-button" onclick="handleSubOption('43')">4.3 ¿Cuáles son los costos por renovación?</button>
        <button class="menu-button" onclick="handleSubOption('44')">4.4 ¿Cómo se realizan las firmas de renovación?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">4.5 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateBillingSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('51')">5.1 ¿A dónde debo solicitar mi factura?</button>
        <button class="menu-button" onclick="handleSubOption('52')">5.2 ¿Mi facturación tiene errores, qué debo hacer?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">5.3 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateLegalSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('61')">6.1 ¿A dónde debo comunicarme para una asesoría jurídica?</button>
        <button class="menu-button" onclick="handleSubOption('62')">6.2 Necesito información del estatus de mi expediente</button>
        <button class="menu-button" onclick="handleSubOption('63')">6.3 Otros asuntos relacionados con el servicio</button>
        <button class="menu-button" onclick="handleSubOption('64')">6.4 ¿Cuál es el proceso para que me entreguen mi inmueble, si acordamos que no vamos a renovar?</button>
        <button class="menu-button" onclick="handleSubOption('65')">6.5 ¿Cuál es el proceso para realizar una terminación anticipada de mi contrato?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">6.6 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateArrendappSubMenu() {
    return `
        <button class="menu-button" onclick="selectOption2('Asesor')">7.1 Soy Asesor</button>
        <button class="menu-button" onclick="selectOption2('Propietario')">7.2 Soy Propietario</button>
        <button class="menu-button" onclick="selectOption2('Inquilino')">7.3 Soy Inquilino</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7.4 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}


function selectOption2(optionText) {
    previousMenus.push(chatBody.innerHTML); // Guardar el menú actual
    chatBody.innerHTML = ''; // Limpiar el contenido del chat
    chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Has seleccionado ${optionText}. Por favor, elige una subopción:</div>`;
    chatBody.innerHTML += generateSubMenu2(optionText); // Cambia optionText2 a optionText
    
    chatBody.scrollTop = 0; // Desplazar hacia arriba al inicio
}


function generateSubMenu2(optionText) {
    switch (optionText) {
        case 'Asesor':
            return generateAsesorSubMenu();
        case 'Propietario':
            return generatePropietarioSubMenu();
        case 'Inquilino':
            return generateInquilinoSubMenu();
        default:
            return '';
    }
}

function generateAsesorSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('7111')">7.1.1 ¿Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('7112')">7.1.2 ¿Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('7113')">7.1.3 ¿Cómo solicito un servicio para una nueva renta?</button>
        <button class="menu-button" onclick="handleSubOption('7114')">7.1.4 ¿Qué datos necesito para dar de alta un nuevo trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7115')">7.1.5 ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7116')">7.1.6 Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7.1.7 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generatePropietarioSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('7211')">7.2.1 ¿Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('7212')">7.2.2 ¿Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('7213')">7.2.3 ¿Cuáles son los documentos que necesito para hacer mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7214')">7.2.4 ¿Cómo debo subir mis documentos?</button>
        <button class="menu-button" onclick="handleSubOption('7215')">7.2.5 ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7216')">7.2.6 Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7.2.7 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateInquilinoSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('7311')">7.3.1 ¿Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('7312')">7.3.2 ¿Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('7313')">7.3.3 ¿Cuáles son los documentos que necesito para hacer mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7314')">7.3.4 ¿Cómo debo subir mis documentos?</button>
        <button class="menu-button" onclick="handleSubOption('7315')">7.3.5 ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('7316')">7.3.6 Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7.3.7 Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}



// Manejar subopciones seleccionadas
// Manejar subopciones seleccionadas
function handleSubOption(subOption) {
    let response = '';
    let buttonsHtml = '';
  

    switch (subOption) {
        /*case '11':
            response = `Aquí tienes la información sobre nuestros servicios. 
                        <a href="CHATBOOT/Brochure Arrenda Protect 2024.pdf" target="_blank"> 
                        <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;

        case '12':
            response = `Aquí tienes la imagen con los costos de nuestros servicios. <br>
                        <a href="CHATBOOT/Lista de Servicios Arrenda Protect.pdf" target="_blank"> 
                        <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;

        case '21':
            response = "Lunes a viernes de 9:30 a 18:00 hrs <br> Sábado de 9:30 a 13:30 hrs";
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;

        // Agrega más casos según sea necesario... */


        //seccion 1
        case '11':
            response = `
                <div style="text-align: justify;">
                    Aquí están nuestros servicios.
                    <a href="CHATBOOT/Brochure Arrenda Protect 2024.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Ver Servicios
                    </a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '12':
            response = `
                <div style="text-align: justify;">
                    Aquí están nuestros costos de servicios.
                    <a href="CHATBOOT/Lista de Servicios Arrenda Protect.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Ver Costos
                    </a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '13':
            response = `
                <div style="text-align: justify;">
                    Aquí están nuestras coberturas legales.
                    <a href="CHATBOOT/Coberturas Arrrenda Protect.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Ver Coberturas
                    </a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '14':
            response = `
                <div style="text-align: justify;">
                    Con nuestra cobertura full rent, el propietario tiene la garantía de recibir sus pagos a tiempo aún cuando el inquilino no pague.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '15':
            response = `
                <div style="text-align: justify;">
                    Nuestros servicios van desde las 24 hrs hábiles con un tiempo máximo de 72 hrs.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '16':
            response = `
                <div style="text-align: justify;">
                    En Arrenda Protect te damos la posibilidad de firmar de manera presencial 
                    <strong style="font-size: smaller;">*tu contrato de lunes a domingo (aplica cargos extras para horarios especiales)</strong> 
                    y también contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma.<br>
                    <strong style="font-size: smaller;">*Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.</strong>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '17':
            response = `
                <div style="text-align: justify;">
                    Lunes a Viernes de 9:30 a 18:00 hrs<br> Sábado de 9:30 a 13:30 hrs
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        //seccion 2
            
        case '21':
    response = `
        <div style="text-align: justify;">
            Todos la información y documentos que recibimos son utilizados estrictamente para los procesos de otorgamiento de nuestros servicios y están resguardados bajo nuestro aviso de privacidad que puedes consultar en. 
            <div style="margin-top: 10px;">
                <a href="CHATBOOT/AVISO DE PRIVACIDAD ARRENDA PROTECT.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                    Ver Aviso de Privacidad
                </a>
            </div>
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

        case '22':
            response = `
                <div style="text-align: justify;">
                    En la validación de la identidad del prospecto y su fiador u obligado solidario (si los tuviese) así como la validación de su solvencia económica, moral y jurídica. Lo cual se determinará mediante la investigación que Arrenda Protect realice ante diversas sociedades públicas o privadas a nivel nacional e internacional.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '23':
            response = `
                <div style="text-align: justify;">
                    El anticipo recibido se tomará a cuenta del precio final de la póliza siempre que el reporte de investigación se emita en sentido “Viable”. Para el caso de los reportes con resultado “No Viable”, el anticipo recibido no será reembolsable por ser utilizado para los gastos de investigación del proceso, puesto que todas las validaciones que realizamos son a través de plataforma de pago.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '24':
            response = `
                <div style="text-align: justify;">
                    Las llamadas a las referencias son parte de nuestro proceso de investigación y tienen como finalidad la verificación de los datos generales recibidos en la solicitud del prospecto. Así como contar con datos de contacto familiares o personales en caso de una emergencia.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '25':
            response = `
                <div style="text-align: justify;">
                    Para iniciar con un trámite, el primer paso es la integración del expediente. Una vez completado, se realiza la investigación y al tener el reporte se procede a elaborar el contrato; en cuanto las partes den visto bueno del mismo, se agenda la cita de firma.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '26':
            response = `
                <div style="text-align: justify;">
                    Al adquirir una póliza jurídica de arrendamiento, obtienes una serie de beneficios que brindan seguridad y tranquilidad tanto para el arrendador como para el arrendatario.<br>
                    <strong style="font-size: smaller;">*Prevención de riesgos</strong><br>
                    <strong style="font-size: smaller;">*Contratos seguros y personalizados</strong><br>
                    <strong style="font-size: smaller;">*Mediación para solución de controversias</strong><br>
                    <strong style="font-size: smaller;">*Cobertura legal ante incumplimiento de la contraparte</strong><br>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '27':
            response = `
                <div style="text-align: justify;">
                    Si tienes dudas sobre tu proceso de investigación, comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Ahí te canalizarán al área de investigaciones.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        //seccion 3

        case '31':
            response = `
                <div style="text-align: justify;">
                    Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '32':
            response = `
                <div style="text-align: justify;">
                    Lo primero que debes hacer si se venció el día de pago y no recibiste el depósito, es contactarlo para validar que se encuentre bien y que no lo haya olvidado. Una vez que confirmes esto, solicitarle la razón de su retraso de pago y fecha de liquidación.<br>
                    En caso de que no te responda a las llamadas, mensajes y correos, o se niegue a darte una fecha de pago, deberás reportar el incumplimiento.<br>
                    Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '33':
            response = `
                <div style="text-align: justify;">
                    Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Te canalizarán al área correspondiente para gestionar los procesos de entrega de tu inmueble.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '34':
            response = `
                <div style="text-align: justify;">
                    Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Te canalizarán al área correspondiente para gestionar los procesos de entrega de tu inmueble.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '35':
            response = `
                <div style="text-align: justify;">
                    WhatsApp:<br>
                    <strong style="font-size: smaller;">55 3208 3575</strong> Línea Protect (línea de atención a clientes)<br>
                    <strong style="font-size: smaller;">55 7331 6554</strong> Línea de renovaciones<br>
                    También puedes llamar a nuestras oficinas:<br>
                    <strong style="font-size: smaller;">55 9047 2157</strong> CDMX y Área Metropolitana<br>
                    <strong style="font-size: smaller;">442 728 0189</strong> Querétaro
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
         //seccion 4  
       
         
         case '41':
            response = `
                <div style="text-align: justify;">
                    El proceso de renovación implica la firma de un nuevo contrato y la validación de documentos necesarios. Para más detalles.
                    <a href="CHATBOOT/PROCESO RENOVACION ARRENDA PROTECT.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Ver Proceso de Renovación
                    </a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
         
         
        case '42':
            response = `
                <div style="text-align: justify;">
                    Comunícate a nuestra línea de renovaciones <strong style="font-size: smaller;">55 7331 6554</strong><br>
                    También puedes llamar a nuestras oficinas:<br>
                    <strong style="font-size: smaller;">55 9047 2157</strong> CDMX y Área Metropolitana<br>
                    <strong style="font-size: smaller;">442 728 0189</strong> Querétaro.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
            case '43':
                response = `
                    <div style="text-align: justify;">
                        El precio de la renovación de la póliza se calcula de acuerdo al precio de lista menos el descuento aplicable de acuerdo a nuestro programa de lealtad. Consulta nuestro programa en 
                        <a href="Lista de Servicios Arrenda Protect.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                            Ver Lista de Servicios
                        </a> para más información.
                    </div>`;
                buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
                break;
        
        case '44':
            response = `
                <div style="text-align: justify;">
                    En Arrenda Protect te damos la posibilidad de firmar de manera presencial 
                    <strong style="font-size: smaller;">*tu contrato de lunes a domingo (aplica cargos extras para horarios especiales)</strong> 
                    y también contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma.<br>
                    <strong style="font-size: smaller;">*Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.</strong>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        

    //seccion 5
    
    case '51':
        response = `
            <div style="text-align: justify;">
                Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. Debes enviar tu constancia de situación fiscal actualizada y tu comprobante de pago. En un plazo máximo de 24 hrs hábiles recibirás tu factura.
            </div>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '52':
        response = `
            <div style="text-align: justify;">
                Puedes comunicarte por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes, enviando la factura que recibiste e indicando cuáles son los datos que se deben corregir. O mandar un correo con la misma información a <strong>reportes@arrendaprotect.com.mx</strong>. En un plazo máximo de 24 hrs hábiles recibirás tu factura.
            </div>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;

        
    //seccion 6
    case '61':
    response = `
        <div style="text-align: justify;">
            Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. 
            Ahí puedes solicitar que se agende una videoconferencia o llamada telefónica (lo que tú prefieras) para otorgarte la asesoría. <br>
            También puedes llamar a nuestras oficinas: <br>
            - 55 9047 2157 CDMX y Área Metropolitana <br>
            - 442 728 0189 Querétaro.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '62':
    response = `
        <div style="text-align: justify;">
            Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. 
            Es muy importante que tengas el número de tu póliza para que identifiquen tu expediente y puedan proporcionarte la información que requieres.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '63':
    response = `
        <div style="text-align: justify;">
            Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. 
            Te canalizarán al área correspondiente para realizar el cierre de tu expediente. 
            También puedes llamar a nuestras oficinas: <br>
            - 55 9047 2157 CDMX y Área Metropolitana <br>
            - 442 728 0189 Querétaro.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '64':
    response = `
        <div style="text-align: justify;">
            Para la entrega de un inmueble sin renovación, se requiere un aviso con 30 días de anticipación. 
            Contacta a nuestro equipo para más detalles.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '65':
    response = `
        <div style="text-align: justify;">
            Comunícate por WhatsApp a Línea Protect (55 3208 3575), nuestra línea de atención a clientes. 
            Te canalizarán al área correspondiente para gestionar el proceso de convenio de terminación anticipada. 
            También puedes llamar a nuestras oficinas: <br>
            - 55 9047 2157 CDMX y Área Metropolitana <br>
            - 442 728 0189 Querétaro.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

    
        //seccion 71
        case '711':
            response = `
                <div style="text-align: justify;">
                    Ingresa a la siguiente liga: 
                    <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '712':
            response = `
                <div style="text-align: justify;">
                    Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). <br>
                    Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '713':
            response = `
                <div style="text-align: justify;">
                    Video tutorial  <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">@ArrendaProtect</a>.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '714':
            response = `
                <div style="text-align: justify;">
                    Para generar un nuevo proceso es necesario que cuentes con: <br>
                    + Tipo de servicio <br>
                    + Domicilio del inmueble <br>
                    + Monto de renta <br>
                    + Nombre, teléfono y correo del propietario <br>
                    + Nombre, teléfono y correo del inquilino
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '715':
            response = `
                <div style="text-align: justify;">
                    De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta 
                    <a href="https://app.arrendaprotect.com.mx/asesor/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/asesor/iniciarSesion</a> 
                    e ingresar a la renta para conocer su estatus.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '716':
            response = `
                <div style="text-align: justify;">
                    Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga donde podrás encontrar tutoriales para realizar tus procesos. 
                    En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). 
                    <strong style="font-size: smaller;">*Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.</strong> 
                    <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">@ArrendaProtect</a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        

        //seccion 72

        case '721':
            response = `
                <div style="text-align: justify;">
                    Ingresa a la siguiente liga: 
                    <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '722':
            response = `
                <div style="text-align: justify;">
                    Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). 
                    Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
            case '723':
                response = `
                    <div style="text-align: justify;">
                        Aquí tienes los requisitos. <br>
                        <a href="CHATBOOT/Requisitos Arrendador.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                            Ver Requisitos
                        </a>
                    </div>`;
                buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
                break;
            
        case '724':
            response = `
                <div style="text-align: justify;">
                    Se necesitan subir los siguientes documentos: <br>
                    +Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>
                    +Comprobante de domicilio del inmueble a arrendar a nombre del arrendador en formato PDF. 
                    Si tienes duda de tu registro ingresa a 
                    <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> 
                    y consulta el tutorial de expediente del arrendador.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '725':
            response = `
                <div style="text-align: justify;">
                    De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta 
                    <a href="https://app.arrendaprotect.com.mx/propietario/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/propietario/iniciarSesion</a> 
                    e ingresar a la renta para conocer su estatus.
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '726':
            response = `
                <div style="text-align: justify;">
                    Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: 
                    <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> 
                    donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). 
                    <strong style="font-size: smaller;">*Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.</strong>
                </div>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        //seccion 73

        case '731':
    response = `
        <div style="text-align: justify;">
            Ingresa a la siguiente liga: 
            <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '732':
    response = `
        <div style="text-align: justify;">
            Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). 
            Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

    case '733':
        response = `
            <div style="text-align: justify;">
                Aquí tienes los documentos necesarios: <br><br>
                <div style="display: flex; flex-direction: column; gap: 10px;">
                    <a href="CHATBOOT/Requisitos Arrendatario.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Inquilino PDF
                    </a>
                    <a href="CHATBOOT/Requisitos Fiador.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Fiador PDF
                    </a>
                    <a href="CHATBOOT/Requisitos Obligado Solidario.pdf" target="_blank" style="display: inline-block; padding: 10px; border-radius: 8px; background-color: #f0f0f0; text-align: center;">
                        Obligado Solidario PDF
                    </a>
                </div>
            </div>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    

case '734':
    response = `
        <div style="text-align: justify;">
            Se necesitan subir los siguientes documentos: <br>
            +Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>
            +Si eres extranjero, residencia TEMPORAL o PERMANENTE vigente formato PDF <br>
            +Comprobante de ingresos de los 3 últimos meses (nómina o estados de cuenta) tus ingresos netos deben cubrir por lo menos 3 veces el monto de renta que deseas contratar, formato PDF <br>
            +Constancia laboral (aplica sólo para empleados) formato PDF. 
            Si tienes duda de tu registro ingresa a 
            <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> 
            y consulta el tutorial de expediente del arrendatario.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '735':
    response = `
        <div style="text-align: justify;">
            De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta 
            <a href="https://app.arrendaprotect.com.mx/inquilino/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/inquilino/iniciarSesion</a> 
            e ingresar a la renta para conocer su estatus.
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

case '736':
    response = `
        <div style="text-align: justify;">
            Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: 
            <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> 
            donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). 
            <strong style="font-size: smaller;">*Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.</strong>
        </div>`;
    buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
    break;

        



        default:
            response = "Lo siento, no tengo información sobre esa opción.";
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
    }

    // Mostrar la respuesta en el chat
// Guardar la altura antes de agregar el nuevo mensaje
const previousScrollHeight = chatBody.scrollHeight;

// Mostrar la respuesta en el chat
chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ${response}</div>`;
chatBody.innerHTML += buttonsHtml; // Agregar el HTML de los botones

// Calcular la posición de desplazamiento deseada
const newScrollHeight = chatBody.scrollHeight;
const newMessageHeight = chatBody.lastElementChild.offsetHeight; // Altura del nuevo mensaje
const newScrollPosition = previousScrollHeight - newMessageHeight; // Nueva posición a la que debe desplazarse

// Ajustar el scroll
chatBody.scrollTop = newScrollPosition;

}



// Función para regresar al menú anterior
function goBack() {
    if (previousMenus.length > 0) {
        chatBody.innerHTML = previousMenus.pop(); // Regresar al menú anterior
        chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo
    } else {
        showMenu(); // Si no hay menús anteriores, mostrar el menú principal
    }
}


// Mostrar opciones de contacto por WhatsApp
function showWhatsAppOptions() {
    chatBody.innerHTML = `
        <div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Elige a qué número deseas enviar el mensaje:</div>
        <button class="menu-button" onclick="handleWhatsAppMessage('5532083575')">Atención al cliente</button>
        <button class="menu-button" onclick="handleWhatsAppMessage1('5533726266')">Soporte técnico</button>
        <button class="menu-button" onclick="handleWhatsAppMessage('5573316554')">Renovaciones</button>
        <button class="menu-button" onclick="handleWhatsAppMessage('5560728629')">Jurídico</button>
        <button class="menu-button" onclick="showMenu()">Regresar</button>
    `;
    chatBody.scrollTop = chatBody.scrollHeight; // Desplazar hacia abajo
}

// Función para enviar mensaje a WhatsApp
const handleWhatsAppMessage = (number, responseText) => {
    if (userName) {
        const fixedMessage = "Solicitud de soporte: Estoy teniendo problemas y/o dudas con el proceso de arrendamiento y necesito asistencia. (Describa el problema)";
        const selectionsMessage = selections.join(', '); // Convertir las selecciones a un string
        const responseMessage = responseText || "No hay respuesta específica.";
        const whatsappUrl = `https://wa.me/${number}?text=Hola%20soy%20${encodeURIComponent(userName)}%0A%0A${encodeURIComponent(fixedMessage)}%0A%0A${encodeURIComponent('Mis selecciones fueron: ' + selectionsMessage)}%0A%0A${encodeURIComponent('Respuesta: ' + responseMessage)}`;
        window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva ventana o pestaña
    }
};

const handleWhatsAppMessage1 = (number, responseText) => {
    if (userName) {
        const fixedMessage = "Solicitud de soporte: Estoy teniendo problemas con la aplicación o plataforma. (Describa el problema)";
        const selectionsMessage = selections.join(', '); // Convertir las selecciones a un string
        const responseMessage = responseText || "No hay respuesta específica.";
        const whatsappUrl = `https://wa.me/${number}?text=Hola%20soy%20${encodeURIComponent(userName)}%0A%0A${encodeURIComponent(fixedMessage)}%0A%0A${encodeURIComponent('Mis selecciones fueron: ' + selectionsMessage)}%0A%0A${encodeURIComponent('Respuesta: ' + responseMessage)}`;
        window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva ventana o pestaña
    }
};

