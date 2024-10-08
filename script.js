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
        
        if (userName === '') {
            askForName(); // Preguntar el nombre si no se ha ingresado
            // Opcional: limpiar el contenido del chat si es necesario
            chatHistory.innerHTML = ''; // Limpiar el historial de chat
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
    chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Hola! Antes de comenzar, ¿cuál es tu nombre?</div>`;
    chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo
}

// Enviar el mensaje
sendButton.addEventListener('click', () => {
    const userMessage = userInput.value;
    if (userMessage) {
        // Si el nombre no ha sido ingresado, guardarlo
        if (userName === '') {
            userName = userMessage;
            chatBody.innerHTML += `<div class="chat-message user-message"><strong>${userName}:</strong> ${userMessage}</div>`;
            chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Encantado de conocerte, ${userName}! ¿Qué quieres hacer hoy?</div>`;
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
});

// Función para mostrar el menú de opciones
function showMenu() {
    previousMenus.push(chatBody.innerHTML); // Guardar el menú actual
    chatBody.innerHTML = `
        <div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ¡Encantado de conocerte, ${userName}! ¿En que puedo ayudarte el dia de hoy?</div>
        <div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> Elige una opción:</div>
        <button class="menu-button" onclick="selectOption('11')">SERVICIOS</button>
        <button class="menu-button" onclick="selectOption('12')">INVESTIGACIONES</button>
        <button class="menu-button" onclick="selectOption('13')">REPORTES</button>
        <button class="menu-button" onclick="selectOption('14')">RENOVACIONES</button>
        <button class="menu-button" onclick="selectOption('15')">FACTURACIÓN</button>
        <button class="menu-button" onclick="selectOption('16')">JURÍDICO</button>
        <button class="menu-button" onclick="selectOption('17')">ARRENDAPP</button>
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
        case '11':
            return generateServiceSubMenu();
        case '12':
            return generateInvestigationSubMenu();
        case '13':
            return generateReportSubMenu();
        case '14':
            return generateRenewalSubMenu();
        case '15':
            return generateBillingSubMenu();
        case '16':
            return generateLegalSubMenu();
        case '17':
            return generateArrendappSubMenu();
        default:
            return '';
    }
}

// Generar submenús para cada opción
// Generar submenús para cada opción
function generateServiceSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('11')">1. Información de sus servicios</button>
        <button class="menu-button" onclick="handleSubOption('12')">2. Costos de servicios</button>
        <button class="menu-button" onclick="handleSubOption('13')">3. Coberturas legales (pólizas jurídicas)</button>
        <button class="menu-button" onclick="handleSubOption('14')">4. ¿Tienen garantía de pago de rentas?</button>
        <button class="menu-button" onclick="handleSubOption('15')">5. ¿Cuánto tiempo dura el trámite?</button>
        <button class="menu-button" onclick="handleSubOption('16')">6. ¿Cómo se realiza la firma de los contratos?</button>
        <button class="menu-button" onclick="handleSubOption('17')">7. ¿Cuáles son sus horarios de servicio?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">8. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateInvestigationSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('21')">1. Información de sus servicios</button>
        <button class="menu-button" onclick="handleSubOption('22')">2. Costos de servicios</button>
        <button class="menu-button" onclick="handleSubOption('23')">3. Coberturas legales (pólizas jurídicas)</button>
        <button class="menu-button" onclick="handleSubOption('24')">4. ¿Tienen garantía de pago de rentas?</button>
        <button class="menu-button" onclick="handleSubOption('25')">5. ¿Cuánto tiempo dura el trámite?</button>
        <button class="menu-button" onclick="handleSubOption('26')">6. ¿Cómo se realiza la firma de los contratos?</button>
        <button class="menu-button" onclick="handleSubOption('27')">7. ¿Cuáles son sus horarios de servicio?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">8. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateReportSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('31')">1. ¿Cómo debo realizar un reporte?</button>
        <button class="menu-button" onclick="handleSubOption('32')">2. ¿Qué hago si mi inquilino no me ha pagado la renta?</button>
        <button class="menu-button" onclick="handleSubOption('33')">3. ¿Qué hago si mi propietario no responde y el inmueble tiene fallas?</button>
        <button class="menu-button" onclick="handleSubOption('34')">4. ¿Qué pasa si el inquilino no se quiere salir del inmueble?</button>
        <button class="menu-button" onclick="handleSubOption('35')">5. ¿Dónde puedo comunicarme con ustedes?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">6. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateRenewalSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('41')">1. ¿Cuál es el proceso de renovación?</button>
        <button class="menu-button" onclick="handleSubOption('42')">2. ¿A dónde debo contactarme para tramitar mi renovación?</button>
        <button class="menu-button" onclick="handleSubOption('43')">3. ¿Cuáles son los costos por renovación?</button>
        <button class="menu-button" onclick="handleSubOption('44')">4. ¿Cómo se realizan las firmas de renovación?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">5. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateBillingSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('51')">1. ¿A dónde debo solicitar mi factura?</button>
        <button class="menu-button" onclick="handleSubOption('52')">2. ¿Mi facturación tiene errores, qué debo hacer?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">3. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateLegalSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('61')">1. ¿A dónde debo comunicarme para una asesoría jurídica?</button>
        <button class="menu-button" onclick="handleSubOption('62')">2. Necesito información del estatus de mi expediente</button>
        <button class="menu-button" onclick="handleSubOption('63')">3. Otros asuntos relacionados con el servicio</button>
        <button class="menu-button" onclick="handleSubOption('64')">4. ¿Cuál es el proceso para que me entreguen mi inmueble, si acordamos que no vamos a renovar?</button>
        <button class="menu-button" onclick="handleSubOption('65')">5. ¿Cuál es el proceso para realizar una terminación anticipada de mi contrato?</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">6. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateArrendappSubMenu() {
    return `
        <button class="menu-button" onclick="generateAsesorSubMenu()">1. Soy Asesor</button>
        <button class="menu-button" onclick="generatePropietarioSubMenu()">2. Soy Propietario</button>
        <button class="menu-button" onclick="generateInquilinoSubMenu()">3. Soy Inquilino</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">4. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateAsesorSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('711')">1. Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('712')">2. Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('713')">3. Cómo solicito un servicio para una nueva renta?</button>
        <button class="menu-button" onclick="handleSubOption('714')">4. ¿Qué datos necesito para dar de alta un nuevo trámite?</button>
        <button class="menu-button" onclick="handleSubOption('715')">5. ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('716')">6. Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generatePropietarioSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('721')">1. Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('722')">2. Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('723')">3. ¿Cuáles son los documentos que necesito para hacer mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('724')">4. ¿Cómo debo subir mis documentos?</button>
        <button class="menu-button" onclick="handleSubOption('725')">5. ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('726')">6. Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7. Enviar mensaje por WhatsApp</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
    `;
}

function generateInquilinoSubMenu() {
    return `
        <button class="menu-button" onclick="handleSubOption('731')">1. Cómo ingreso a la plataforma?</button>
        <button class="menu-button" onclick="handleSubOption('732')">2. Cómo crear una cuenta?</button>
        <button class="menu-button" onclick="handleSubOption('733')">3. ¿Cuáles son los documentos que necesito para hacer mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('734')">4. ¿Cómo debo subir mis documentos?</button>
        <button class="menu-button" onclick="handleSubOption('735')">5. ¿Cómo sé en qué estatus está mi trámite?</button>
        <button class="menu-button" onclick="handleSubOption('736')">6. Tengo dudas para avanzar en mi proceso, requiero asistencia.</button>
        <button class="menu-button" onclick="showWhatsAppOptions()">7. Enviar mensaje por WhatsApp</button>
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


        

    case '11':
        response = `Aquí tienes la información sobre nuestros servicios.
                    <a href="CHATBOOT/Brochure Arrenda Protect 2024.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '12':
        response = `Aquí tienes la imagen con los costos de nuestros servicios. <br>
                    <a href="CHATBOOT/Lista de Servicios Arrenda Protect.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '13':
        response = `Aquí tienes las coberturas legales de nuestras pólizas jurídicas. <br>
                    <a href="CHATBOOT/Coberturas Arrrenda Protect.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '14':
        response = "Con nuestra cobertura full rent, el propietario tiene la garantía de recibir sus pagos a tiempo aún cuando el inquilino no pague.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '15':
        response = "Nuestros servicios van desde las 24 hrs hábiles con un tiempo máximo de 72 hrs.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '16':
        response = `En Arrenda Protect te damos la posibilidad de firmar de manera presencial* tu contrato de lunes a domingo (aplica cargos extras para horarios especiales) y también contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma. <br>
                    *Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '17':
        response = "Lunes a viernes de 9:30 a 18:00 hrs <br> Sábado de 9:30 a 13:30 hrs";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '21':
        response = `Todos la información y documentos que recibimos son utilizados estrictamente para los procesos de otorgamiento de nuestros servicios y están resguardados bajo nuestro aviso de privacidad que puedes consultar en <a href="CHATBOOT/AVISO DE PRIVACIDAD ARRENDA PROTECT.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>.`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '22':
        response = "En la validación de la identidad del prospecto y su fiador u obligado solidario (si los tuviese) así como la validación de su solvencia económica, moral y jurídica. Lo cual se determinará mediante la investigación que Arrenda Protect realice ante diversas sociedades publicas o privadas a nivel nacional e internacional";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '23':
        response = "El anticipo recibido se tomará a cuenta del precio final de la poliza siempre que el reporte de investigación se emita en sentido “Viable”, para el caso de los reportes con resultado “No Viable” el anticipo recibido no será reembolsable por ser utilizado para los gastos de investigación del proceso, puesto que todas las validaciones que realizamos son a través de plataforma de pago.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '24':
        response = "Las llamadas a las referencias son parte de nuestro proceso de investigación y tienen como finalidad la verificación de los datos generales recibidos en la solicitud del prospecto. Así como contar con datos de contacto familiares o personales en caso de una emergencia.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '25':
        response = "Para iniciar con un trámite el primer paso es la integración del expediente, una vez completado se realiza la investigación y al tener el reporte se procede a elaborar el contrato; en cuanto las partes den visto bueno del mismo se agenda la cita de firma.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '26':
        response = "Al adquirir una póliza jurídica de arrendamiento, obtienes una serie de beneficios que brindan seguridad y tranquilidad tanto para el arrendador como para el arrendatario.<br>*Prevención de riesgos <br>*Contratos seguros y personalizados <br>*Mediación para solución de controversias <br>*Cobertura legal ante incumplimiento de la contraparte <br>";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '27':
        response = "Si tienes dudas sobre tu proceso de investigación comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí te canalizarán al área de investigaciones.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;

    case '31':
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '32':
        response = "Lo primero que debes hacer si se venció el día de pago y no recibiste el depósito, es contactarlo para validar que se encuentre bien y que no lo haya olvidado. Una vez que confirmes esto solicitarle la razón de su retraso de pago y fecha de liquidación. <br>En caso de que no te responda a las llamadas, mensajes y correos o se niegue a darte una fecha de pago deberás reportar el incumplimiento. <br> Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '33':
        response = "Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para gestionar los procesos de entrega de tu inmueble.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '34':
        response = "Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para gestionar los procesos de entrega de tu inmueble.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '35':
        response = "Whatsapp <br> 55 3208 3575 Línea Protect (linea de atención a clientes) <br> 55 7331 6554 Línea de renovaciones <br> Tambien puedes llamar a nuestras oficinas <br> 55 9047 2157 CDMX y Área Metropolitana<br> 442 728 0189 Querétaro";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '41':
        response = `El proceso de renovación implica la firma de un nuevo contrato y la validación de documentos necesarios. Para más detalles. <br>
        <a href="CHATBOOT/PROCESO RENOVACION ARRENDA PROTECT.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"> </a>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '42':
        response = "Comunícate a nuestra linea de renovaciones 55 7331 6554 <br> Tambien puedes llamar a nuestras oficinas <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    //dalta archivo de costos de renovacion
    case '43':
        response = `El precio de la renovación de la póliza se calcula de acuerdo a el precio de lista menos el descuento aplicable de acuerdo a nuestro programa de lealtad. Consulta nuestro programa en <a href='Lista de Servicios Arrenda Protect.pdf' target='_blank'> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"> </a> para más información.`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '44':
        response = "En Arrenda Protect te damos la posibilidad de firmar de manera presencial* tu contrato de lunes a domingo (aplica cargos extras para horarios especiales) y tambien contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma. <br> *Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '51':
        response = "Comunícate por whats app a Línea Protect )55 3208 3575), nuestra linea de atención a clientes. Debes enviar tu constancia de situación fiscal actualizada y tu comprobante de pago. En un plazo máximo de 24 hrs hábiles recibirás tu factura";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '52':
        response = "Puedes comunicarte por whats app a Línea Protect )55 3208 3575), nuestra linea de atención a clientes. Enviando la factura que recibiste e indicando cuales son los datos que se deben corregir, o mandar un correo con la misma información al correo reportes@arrendaprotect.com.mx. En un plazo máximo de 24 hrs hábiles recibirás tu factura.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '61':
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Ahí puedes solicitar se agende una videoconferencia o llamada telefónica (lo que tú prefieras) para otorgarte la asesoría. <br> Tambien puedes llamar a nuestras oficinas y solicitarla. <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '62':
        response = " Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Es muy importante que tengas el numero de tu póliza para que identifiquen tu expediente y puedan proporcionarte la información que requieres.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '63':
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para realizar el cierre de tu expediente. Tambien puedes llamar a nuestras oficinas y solicitarla. <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '64':
        response = "Para la entrega de un inmueble sin renovación, se requiere un aviso con 30 días de anticipación. Contacta a nuestro equipo para más detalles.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    
    case '65':
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente gestionar el proceso de convenio de terminación anticipada <br> Tambien puedes llamar a nuestras oficinas y solicitarla.<br> 55 9047 2157 CDMX y Área Metropolitana<br> 442 728 0189 Querétaro.";
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
        break;
    

        case '711':
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '712':
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). <br> Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '713':
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final).';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '714':
            response = 'Para generar un nuevo proceso es necesario que cuentes con: <br>+Tipo de servicio <br>+Domicilio del inmueble <br>+Monto de renta <br>+Nombre, teléfono y correo del propietario <br>+Nombre, teléfono y correo del inquilino';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '715':
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/asesor/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/asesor/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '716':
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '721':
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;

        case '722':
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
          buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '723':
            response = `Aquí tienes los requisitos. <br>
            <a href="CHATBOOT/Requisitos Arrendador.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '724':
            response = 'Se necesitan subir los siguientes documentos: <br>+Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>+Comprobante de domicilio del inmueble a arrendar a nombre del arrendador en formato PDF. Si tienes duda de tu registro ingresa a <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> y consulta el tutorial de expediente del arrendador.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '725':
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/propietario/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/propietario/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '726':
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '731':
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '732':
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '733':     response = `Aquí tienes los requisitos. <br>
        <a href="CHATBOOT/Requisitos Arrendatario.pdf" target="_blank">Inquilino PDF</a><br>
        <a href="CHATBOOT/Requisitos Fiador.pdf" target="_blank">Fiador PDF</a><br>
        <a href="CHATBOOT/Requisitos Obligado Solidario.pdf" target="_blank">Obligado Solidario PDF</a>`;
        buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '734':
            response = 'Se necesitan subir los siguientes documentos: <br>+Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>+Si eres extranjero, residencia TEMPORAL o PERMANENTE vigente formato PDF <br>+Comprobante de ingresos de los 3 últimos meses (nómina o estados de cuenta) tus ingresos netos deben cubrir por lo menos 3 veces el monto de renta que deseas contratar, formato PDF <br>+Constancia laboral (aplica sólo para empleados) formato PDF. Si tienes duda de tu registro ingresa a <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> y consulta el tutorial de expediente del arrendatario.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '735':
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/inquilino/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/inquilino/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        
        case '736':
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
        



        default:
            response = "Lo siento, no tengo información sobre esa opción.";
            buttonsHtml = `<button class="menu-button" onclick="goBack()">Regresar</button>`;
            break;
    }

    // Mostrar la respuesta en el chat
    chatBody.innerHTML += `<div class="chat-message bot-message"><strong><img src="CHATBOOT/eva.png" alt="Eva" class="bot-image" /> </strong> ${response}</div>`;
    chatBody.innerHTML += buttonsHtml; // Agregar el HTML de los botones
    chatBody.scrollTop = chatBody.scrollHeight; // Desplaza hacia abajo
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
        <button class="menu-button" onclick="handleWhatsAppMessage('5532083575')">Soporte General</button>
        <button class="menu-button" onclick="handleWhatsAppMessage('5573316554')">Renovaciones</button>
        <button class="menu-button" onclick="handleWhatsAppMessage('5560728629')">Rentas</button>
        <button class="menu-button" onclick="goBack()">Regresar</button>
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


