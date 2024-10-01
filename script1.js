document.addEventListener('DOMContentLoaded', () => {
    const chatbox = document.querySelector('.chatbox');
    const chatInputContainer = document.querySelector('.chat-input'); // Contenedor del área de entrada
    const chatInput = document.querySelector('.chat-input textarea');
    const sendChatBtn = document.querySelector('#send-btn');
    const chatbotToggler = document.querySelector('.chatbot-toggler');
    const chatbot = document.querySelector('.chatbot');

    // Variable global para guardar el nombre del usuario
    window.userName = null;

    // Función para crear mensajes en el chat
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

    // Función para mostrar el mensaje de solicitud de nombre
    const showNamePrompt = () => {
        const promptMessage = "Por favor, ingresa tu nombre:";
        const incomingChatLi = createChatLi(promptMessage, "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
    };

    // Función para manejar la entrada del nombre del usuario
    const handleUserNameInput = () => {
        const message = chatInput.value.trim();
        if (message) {
            window.userName = message;
            chatInput.value = ""; // Limpiar el área de entrada
            
            // Mostrar confirmación del nombre y las opciones
            const nameConfirmationMessage = `Hola ${window.userName}, ¿en qué puedo ayudarte hoy?`;
            const nameConfirmationChatLi = createChatLi(nameConfirmationMessage, "incoming");
            chatbox.appendChild(nameConfirmationChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);

            // Ocultar el panel de entrada
            chatInputContainer.classList.add('hidden'); // Usar la clase para ocultar el contenedor

            // Llamar al script para mostrar opciones
            if (window.initializeOptions) {
                window.initializeOptions();
            }
        }
    };




    
    // Asignar eventos al botón de enviar y al área de entrada
    sendChatBtn.addEventListener("click", handleUserNameInput);
    chatInput.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleUserNameInput();
        }
    });

    // Mostrar la solicitud de nombre al cargar
    showNamePrompt();

    // Manejar la apertura y cierre del chatbot
    chatbotToggler.addEventListener('click', () => {
        document.body.classList.toggle('show-chatbot');
    });
});
