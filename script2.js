window.initializeOptions = () => {
    const chatbox = document.querySelector('.chatbox');
    const chatInput = document.querySelector('.chat-input textarea');

    const createChatLi = (message, className, buttons = []) => {
        const chatLi = document.createElement("li");
        chatLi.classList.add("chat", className);
        chatLi.innerHTML = `<p>${message}</p>`;

        if (buttons.length > 0) {
            const buttonContainer = document.createElement("div");
            buttonContainer.classList.add("button-container");
            buttons.forEach(button => {
                const buttonElement = document.createElement("button");
                buttonElement.classList.add("button-option");
                buttonElement.textContent = button.text;
                buttonElement.addEventListener('click', button.action);
                buttonContainer.appendChild(buttonElement);
            });
            chatLi.appendChild(buttonContainer);
        }

        return chatLi;
    };

    
    const showOptions = () => {
        const optionsText = "Selecciona una opción: <BR>";
        const buttons = [
            { text: "SERVICIOS", action: () => handleUserInput('1') },
            { text: "INVESTIGACIONES", action: () => handleUserInput('2') },
            { text: "REPORTES", action: () => handleUserInput('3') },
            { text: "RENOVACIONES", action: () => handleUserInput('4') },
            { text: "FACTURACIÓN", action: () => handleUserInput('5') },
            { text: "JURÍDICO", action: () => handleUserInput('6') },
            { text: "ARRENDAPP", action: () => handleUserInput('7') },
            { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') }
        ];
        const incomingChatLi = createChatLi(optionsText, "incoming", buttons);
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    };

    const handleUserInput = (userInput) => {
        const selectedOption = parseInt(userInput);
        let response;
        let buttons = [];

        switch (selectedOption) {
            case 1:
                response = "Seleccionaste SERVICIOS. Por favor, elige una subopción:";
                buttons = [
                    { text: "Información de sus servicios", action: () => handleUserInput('11') },
                    { text: "Costos de servicios", action: () => handleUserInput('12') },
                    { text: "Coberturas legales (pólizas jurídicas)", action: () => handleUserInput('13') },
                    { text: "¿Tienen garantía de pago de rentas?", action: () => handleUserInput('14') },
                    { text: "¿Cuánto tiempo dura el trámite?", action: () => handleUserInput('15') },
                    { text: "¿Cómo se realiza la firma de los contratos?", action: () => handleUserInput('16') },
                    { text: "¿Cuáles son sus horarios de servicio?", action: () => handleUserInput('17') },
                    { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                    { text: "Regresar", action: () => showOptions() }
                ];
                break;
                case 2:
                    response = "Seleccionaste INVESTIGACIONES. Por favor, elige una subopción:";
                    buttons = [
                        { text: "Información de sus servicios", action: () => handleUserInput('21') },
                        { text: "Costos de servicios", action: () => handleUserInput('22') },
                        { text: "Coberturas legales (pólizas jurídicas)", action: () => handleUserInput('23') },
                        { text: "¿Tienen garantía de pago de rentas?", action: () => handleUserInput('24') },
                        { text: "¿Cuánto tiempo dura el trámite?", action: () => handleUserInput('25') },
                        { text: "¿Cómo se realiza la firma de los contratos?", action: () => handleUserInput('26') },
                        { text: "¿Cuáles son sus horarios de servicio?", action: () => handleUserInput('27') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;
                
                case 3:
                    response = "Seleccionaste REPORTES. Por favor, elige una subopción:";
                    buttons = [
                        { text: "¿Cómo debo realizar un reporte?", action: () => handleUserInput('31') },
                        { text: "¿Qué hago si mi inquilino no me ha pagado la renta?", action: () => handleUserInput('32') },
                        { text: "¿Qué hago si mi propietario no responde y el inmueble tiene fallas?", action: () => handleUserInput('33') },
                        { text: "¿Qué pasa si el inquilino no se quiere salir del inmueble?", action: () => handleUserInput('34') },
                        { text: "¿Dónde puedo comunicarme con ustedes?", action: () => handleUserInput('35') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;
                
                case 4:
                    response = "Seleccionaste RENOVACIONES. Por favor, elige una subopción:";
                    buttons = [
                        { text: "¿Cuál es el proceso de renovación?", action: () => handleUserInput('41') },
                        { text: "¿A dónde debo contactarme para tramitar mi renovación?", action: () => handleUserInput('42') },
                        { text: "¿Cuáles son los costos por renovación?", action: () => handleUserInput('43') },
                        { text: "¿Cómo se realizan las firmas de renovación?", action: () => handleUserInput('44') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;
                
                case 5:
                    response = "Seleccionaste FACTURACIÓN. Por favor, elige una subopción:";
                    buttons = [
                        { text: "¿A dónde debo solicitar mi factura?", action: () => handleUserInput('51') },
                        { text: "¿Mi facturación tiene errores, qué debo hacer?", action: () => handleUserInput('52') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;
                
                case 6:
                    response = "Seleccionaste JURÍDICO. Por favor, elige una subopción:";
                    buttons = [
                        { text: "¿A dónde debo comunicarme para una asesoría jurídica?", action: () => handleUserInput('61') },
                        { text: "Necesito información del estatus de mi expediente", action: () => handleUserInput('62') },
                        { text: "Otros asuntos relacionados con el servicio", action: () => handleUserInput('63') },
                        { text: "¿Cuál es el proceso para que me entreguen mi inmueble, si acordamos que no vamos a renovar?", action: () => handleUserInput('64') },
                        { text: "¿Cuál es el proceso para realizar una terminación anticipada de mi contrato?", action: () => handleUserInput('65') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;
                
                case 7:
                    response = "Seleccionaste ARRENDAPP. Por favor, elige una subopción:";
                    buttons = [
                        { text: "SOY ASESOR", action: () => handleUserInput('71') },
                        { text: "SOY PROPIETARIO", action: () => handleUserInput('72') },
                        { text: "SOY INQUILINO", action: () => handleUserInput('73') },
                        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;

                case 71:
    response = "Seleccionaste Soy Asesor. Por favor, elige una subopción:";
    buttons = [
        { text: "Cómo ingreso a la plataforma?", action: () => handleUserInput('711') },
        { text: "Cómo crear una cuenta?", action: () => handleUserInput('712') },
        { text: "Cómo solicito un servicio para una nueva renta?", action: () => handleUserInput('713') },
        { text: "¿Qué datos necesito para dar de alta un nuevo trámite?", action: () => handleUserInput('714') },
        { text: "¿Cómo sé en qué estatus está mi trámite?", action: () => handleUserInput('715') },
        { text: "Tengo dudas para avanzar en mi proceso, requiero asistencia.", action: () => handleUserInput('716') },
        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
        { text: "Regresar", action: () => showOptions() }
    ];
    break;

case 72:
    response = "Seleccionaste Soy Propietario. Por favor, elige una subopción:";
    buttons = [
        { text: "Cómo ingreso a la plataforma?", action: () => handleUserInput('721') },
        { text: "Cómo crear una cuenta?", action: () => handleUserInput('722') },
        { text: "¿Cuáles son los documentos que necesito para hacer mi trámite?", action: () => handleUserInput('723') },
        { text: "¿Cómo debo subir mis documentos?", action: () => handleUserInput('724') },
        { text: "¿Cómo sé en qué estatus está mi trámite?", action: () => handleUserInput('725') },
        { text: "Tengo dudas para avanzar en mi proceso, requiero asistencia.", action: () => handleUserInput('726') },
        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
        { text: "Regresar", action: () => showOptions() }
    ];
    break;

case 73:
    response = "Seleccionaste Soy Inquilino. Por favor, elige una subopción:";
    buttons = [
        { text: "Cómo ingreso a la plataforma?", action: () => handleUserInput('731') },
        { text: "Cómo crear una cuenta?", action: () => handleUserInput('732') },
        { text: "¿Cuáles son los documentos que necesito para hacer mi trámite?", action: () => handleUserInput('733') },
        { text: "¿Cómo debo subir mis documentos?", action: () => handleUserInput('734') },
        { text: "¿Cómo sé en qué estatus está mi trámite?", action: () => handleUserInput('735') },
        { text: "Tengo dudas para avanzar en mi proceso, requiero asistencia.", action: () => handleUserInput('736') },
        { text: "Enviar mensaje por WhatsApp", action: () => handleUserInput('8') },
        { text: "Regresar", action: () => showOptions() }
    ];
    break;
    



    case 11:
        response = `Aquí tienes la información sobre nuestros servicios. 
                    <a href="CHATBOOT/Brochure Arrenda Protect 2024.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 12:
        response = `Aquí tienes la imagen con los costos de nuestros servicios. <br>
                    <a href="CHATBOOT/Lista de Servicios Arrenda Protect.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 13:
        response = `Aquí tienes las coberturas legales de nuestras pólizas jurídicas. <br>
                    <a href="CHATBOOT/Coberturas Arrrenda Protect.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 14:
        response = "Con nuestra cobertura full rent, el propietario tiene la garantía de recibir sus pagos a tiempo aún cuando el inquilino no pague.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 15:
        response = "Nuestros servicios van desde las 24 hrs hábiles con un tiempo máximo de 72 hrs.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 16:
        response = `En Arrenda Protect te damos la posibilidad de firmar de manera presencial* tu contrato de lunes a domingo (aplica cargos extras para horarios especiales) y también contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma. <br>
                    *Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 17:
        response = "Lunes a viernes de 9:30 a 18:00 hrs <br> Sábado de 9:30 a 13:30 hrs";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('1') }
        ];
        break;
    
    case 21:
        response = `Todos la información y documentos que recibimos son utilizados estrictamente para los procesos de otorgamiento de nuestros servicios y están resguardados bajo nuestro aviso de privacidad que puedes consultar en <a href="CHATBOOT/AVISO DE PRIVACIDAD ARRENDA PROTECT.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>.`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 22:
        response = "En la validación de la identidad del prospecto y su fiador u obligado solidario (si los tuviese) así como la validación de su solvencia económica, moral y jurídica. Lo cual se determinará mediante la investigación que Arrenda Protect realice ante diversas sociedades publicas o privadas a nivel nacional e internacional";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 23:
        response = "El anticipo recibido se tomará a cuenta del precio final de la poliza siempre que el reporte de investigación se emita en sentido “Viable”, para el caso de los reportes con resultado “No Viable” el anticipo recibido no será reembolsable por ser utilizado para los gastos de investigación del proceso, puesto que todas las validaciones que realizamos son a través de plataforma de pago.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 24:
        response = "Las llamadas a las referencias son parte de nuestro proceso de investigación y tienen como finalidad la verificación de los datos generales recibidos en la solicitud del prospecto. Así como contar con datos de contacto familiares o personales en caso de una emergencia.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 25:
        response = "Para iniciar con un trámite el primer paso es la integración del expediente, una vez completado se realiza la investigación y al tener el reporte se procede a elaborar el contrato; en cuanto las partes den visto bueno del mismo se agenda la cita de firma.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 26:
        response = "Al adquirir una póliza jurídica de arrendamiento, obtienes una serie de beneficios que brindan seguridad y tranquilidad tanto para el arrendador como para el arrendatario.<br>*Prevención de riesgos <br>*Contratos seguros y personalizados <br>*Mediación para solución de controversias <br>*Cobertura legal ante incumplimiento de la contraparte <br>";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 27:
        response = "Si tienes dudas sobre tu proceso de investigación comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí te canalizarán al área de investigaciones.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('2') }
        ];
        break;
    
    case 31:
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('3') }
        ];
        break;
    
    case 32:
        response = "Lo primero que debes hacer si se venció el día de pago y no recibiste el depósito, es contactarlo para validar que se encuentre bien y que no lo haya olvidado. Una vez que confirmes esto solicitarle la razón de su retraso de pago y fecha de liquidación. <br>En caso de que no te responda a las llamadas, mensajes y correos o se niegue a darte una fecha de pago deberás reportar el incumplimiento. <br> Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes, ahí tomarán tu reporte y te mantendrán al tanto de las actualizaciones correspondientes";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('3') }
        ];
        break;
    
    case 33:
        response = "Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para gestionar los procesos de entrega de tu inmueble.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('3') }
        ];
        break;
    
    case 34:
        response = "Es muy importante que no te esperes hasta el último momento para reportar una controversia de tu arrendamiento con nosotros. Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para gestionar los procesos de entrega de tu inmueble.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('3') }
        ];
        break;
    
    case 35:
        response = "Whatsapp <br> 55 3208 3575 Línea Protect (linea de atención a clientes) <br> 55 7331 6554 Línea de renovaciones <br> Tambien puedes llamar a nuestras oficinas <br> 55 9047 2157 CDMX y Área Metropolitana<br> 442 728 0189 Querétaro";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('3') }
        ];
        break;
    
    case 41:
        response = `El proceso de renovación implica la firma de un nuevo contrato y la validación de documentos necesarios. Para más detalles. <br>
        <a href="CHATBOOT/PROCESO RENOVACION ARRENDA PROTECT.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"> </a>`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('4') }
        ];
        break;
    
    case 42:
        response = "Comunícate a nuestra linea de renovaciones 55 7331 6554 <br> Tambien puedes llamar a nuestras oficinas <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('4') }
        ];
        break;
    //dalta archivo de costos de renovacion
    case 43:
        response = `El precio de la renovación de la póliza se calcula de acuerdo a el precio de lista menos el descuento aplicable de acuerdo a nuestro programa de lealtad. Consulta nuestro programa en <a href='Lista de Servicios Arrenda Protect.pdf' target='_blank'> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"> </a> para más información.`;
        buttons = [
            { text: "Regresar", action: () => handleUserInput('4') }
        ];
        break;
    
    case 44:
        response = "En Arrenda Protect te damos la posibilidad de firmar de manera presencial* tu contrato de lunes a domingo (aplica cargos extras para horarios especiales) y tambien contamos con plataforma para firmar electrónicamente con certificación conforme a la NOM-151 y generación de archivo Blockchain para evitar cualquier alteración posterior a la firma. <br> *Deberán presentarse todos los firmantes a la cita. En caso de recabación de firmas individuales se podrán agendar con costo extra.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('4') }
        ];
        break;
    
    case 51:
        response = "Comunícate por whats app a Línea Protect )55 3208 3575), nuestra linea de atención a clientes. Debes enviar tu constancia de situación fiscal actualizada y tu comprobante de pago. En un plazo máximo de 24 hrs hábiles recibirás tu factura";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('5') }
        ];
        break;
    
    case 52:
        response = "Puedes comunicarte por whats app a Línea Protect )55 3208 3575), nuestra linea de atención a clientes. Enviando la factura que recibiste e indicando cuales son los datos que se deben corregir, o mandar un correo con la misma información al correo reportes@arrendaprotect.com.mx. En un plazo máximo de 24 hrs hábiles recibirás tu factura.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('5') }
        ];
        break;
    
    case 61:
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Ahí puedes solicitar se agende una videoconferencia o llamada telefónica (lo que tú prefieras) para otorgarte la asesoría. <br> Tambien puedes llamar a nuestras oficinas y solicitarla. <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('6') }
        ];
        break;
    
    case 62:
        response = " Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Es muy importante que tengas el numero de tu póliza para que identifiquen tu expediente y puedan proporcionarte la información que requieres.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('6') }
        ];
        break;
    
    case 63:
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente para realizar el cierre de tu expediente. Tambien puedes llamar a nuestras oficinas y solicitarla. <br> 55 9047 2157 CDMX y Área Metropolitana <br> 442 728 0189 Querétaro.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('6') }
        ];
        break;
    
    case 64:
        response = "Para la entrega de un inmueble sin renovación, se requiere un aviso con 30 días de anticipación. Contacta a nuestro equipo para más detalles.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('6') }
        ];
        break;
    
    case 65:
        response = "Comunícate por whats app a Línea Protect (55 3208 3575), nuestra linea de atención a clientes. Te canalizaran al área correspondiente gestionar el proceso de convenio de terminación anticipada <br> Tambien puedes llamar a nuestras oficinas y solicitarla.<br> 55 9047 2157 CDMX y Área Metropolitana<br> 442 728 0189 Querétaro.";
        buttons = [
            { text: "Regresar", action: () => handleUserInput('6') }
        ];
        break;
    

        case 711:
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 712:
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). <br> Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 713:
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final).';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 714:
            response = 'Para generar un nuevo proceso es necesario que cuentes con: <br>+Tipo de servicio <br>+Domicilio del inmueble <br>+Monto de renta <br>+Nombre, teléfono y correo del propietario <br>+Nombre, teléfono y correo del inquilino';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 715:
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/asesor/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/asesor/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 716:
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 721:
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        //---------------------------------
        case 722:
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 723:
            response = `Aquí tienes los requisitos. <br>
            <a href="CHATBOOT/Requisitos Arrendador.pdf" target="_blank"> <img src="CHATBOOT/Descargar.png" alt="Brochure" style="max-width: 100%; height: auto;"></a>`;
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 724:
            response = 'Se necesitan subir los siguientes documentos: <br>+Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>+Comprobante de domicilio del inmueble a arrendar a nombre del arrendador en formato PDF. Si tienes duda de tu registro ingresa a <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> y consulta el tutorial de expediente del arrendador.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 725:
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/propietario/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/propietario/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 726:
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 731:
            response = 'Ingresa a la siguiente liga: <a href="https://app.arrendaprotect.com.mx/" target="_blank">https://app.arrendaprotect.com.mx/</a>';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 732:
            response = 'Video tutorial ### (por elaborarse cuando la plataforma tenga la versión final). Importante: debes revisar que tus datos de contacto sean correctos, ya que en caso de error no recibirás correctamente las notificaciones del avance del trámite.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 733:     response = `Aquí tienes los requisitos. <br>
        <a href="CHATBOOT/Requisitos Arrendatario.pdf" target="_blank">Inquilino PDF</a><br>
        <a href="CHATBOOT/Requisitos Fiador.pdf" target="_blank">Fiador PDF</a><br>
        <a href="CHATBOOT/Requisitos Obligado Solidario.pdf" target="_blank">Obligado Solidario PDF</a>`;
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 734:
            response = 'Se necesitan subir los siguientes documentos: <br>+Identificación oficial vigente (INE o pasaporte) es muy importante que se envíe en formato imagen (foto) sin flash, sin sombras en fondo de cualquier color menos blanco y si recortar la fotografía <br>+Si eres extranjero, residencia TEMPORAL o PERMANENTE vigente formato PDF <br>+Comprobante de ingresos de los 3 últimos meses (nómina o estados de cuenta) tus ingresos netos deben cubrir por lo menos 3 veces el monto de renta que deseas contratar, formato PDF <br>+Constancia laboral (aplica sólo para empleados) formato PDF. Si tienes duda de tu registro ingresa a <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> y consulta el tutorial de expediente del arrendatario.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 735:
            response = 'De acuerdo a la configuración de tu cuenta, elegiste un medio de notificación (correo o WhatsApp) en el que la plataforma te irá notificando de los avances de tu trámite o puedes iniciar sesión en tu cuenta <a href="https://app.arrendaprotect.com.mx/inquilino/iniciarSesion" target="_blank">https://app.arrendaprotect.com.mx/inquilino/iniciarSesion</a> e ingresar a la renta para conocer su estatus.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        
        case 736:
            response = 'Para aclarar dudas respecto a los procesos debes ingresar a la siguiente liga: <a href="https://www.youtube.com/@ArrendaProtect" target="_blank">www.youtube.com/@ArrendaProtect</a> donde podrás encontrar tutoriales para realizar tus procesos. En caso de que la información que requieras no se encuentre en nuestro canal, solicita asistencia de un asesor protect aquí: (liga a línea protect). *Recuerda que nuestros horarios de atención son: Lunes a viernes de 9:30 a 18:00 hrs y Sábado de 9:30 a 13:30 hrs.';
            buttons = [
                { text: "Regresar", action: () => handleUserInput('7') }
            ];
            break;
        




    /*        case 11:
                response = `Aquí tienes la información sobre nuestros servicios. <br>
                            <a href="URL_DEL_PDF" target="_blank">Descargar PDF</a>`;
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 12:
                response = `Aquí tienes la imagen con los costos de nuestros servicios. <br>
                            <img src="URL_DE_LA_IMAGEN.png" alt="Costos de Servicios" style="max-width: 100%; height: auto;">`;
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 13:
                response = "Aquí tienes las coberturas legales de nuestras pólizas jurídicas.";
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 14:
                response = "Sí, ofrecemos garantía de pago de rentas.";
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 15:
                response = "El tiempo de trámite varía según el servicio.";
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 16:
                response = "La firma de contratos se realiza electrónicamente.";
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;
            case 17:
                response = "Nuestros horarios de servicio son de 9:00 a 18:00.";
                buttons = [
                    { text: "Regresar", action: () => handleUserInput('1') }
                ];
                break;

*/

            case 8:
                response = "Seleccionaste ARRENDAPP. Por favor, elige una subopción:";
                    buttons = [
                        { text: "Atención al cliente", action: () => handleUserInput('81') },
                        { text: "Area de cobranza", action: () => handleUserInput('83') },
                        { text: "Area de renovaciones", action: () => handleUserInput('82') },
                        { text: "Regresar", action: () => showOptions() }
                    ];
                    break;


            case 83:
                handleWhatsAppMessage();
                return;
            case 81:
                handleWhatsAppMessage2();
                return;
            case 82:
                handleWhatsAppMessage3();
                return;    


            default:
                response = "Opción no válida. Por favor, elige una opción del menú.";
                buttons = [
                    { text: "Regresar", action: () => showOptions() }
                ];
                break;
        }
        
        const incomingChatLi = createChatLi(response, "incoming", buttons);
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    };

   
    const handleWhatsAppMessage = () => {
        if (window.userName) {
            const fixedMessage = "Solicitud de soporte: Estoy teniendo problemas y/o dudas con el proceso de arrendamiento y necesito asistencia.(Describa el problema)";
            const whatsappUrl = `https://wa.me/5532083575?text=Hola%20soy%20${encodeURIComponent(window.userName)}%0A%0A${encodeURIComponent(fixedMessage)}`;
            window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva ventana o pestaña
        }
    };
    //renovaciones
    const handleWhatsAppMessage2 = () => {
        if (window.userName) {
            const fixedMessage = "Solicitud de soporte: Estoy teniendo problemas y/o dudas con el proceso de arrendamiento y necesito asistencia.(Describa el problema)";
            const whatsappUrl = `https://wa.me/5573316554?text=Hola%20soy%20${encodeURIComponent(window.userName)}%0A%0A${encodeURIComponent(fixedMessage)}`;
            window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva ventana o pestaña
        }
    };
//rentas
    const handleWhatsAppMessage3 = () => {
        if (window.userName) {
            const fixedMessage = "Solicitud de soporte: Estoy teniendo problemas y/o dudas con el proceso de arrendamiento y necesito asistencia.(Describa el problema)";
            const whatsappUrl = `https://wa.me/5560728629?text=Hola%20soy%20${encodeURIComponent(window.userName)}%0A%0A${encodeURIComponent(fixedMessage)}`;
            window.open(whatsappUrl, '_blank'); // Abre el enlace en una nueva ventana o pestaña
        }
    };
  

    // Inicializar opciones si el nombre está disponible
    if (window.userName) {
        showOptions();
    }
};
