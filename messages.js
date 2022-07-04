// ==UserScript==
// @name         Сообщения Модератора
// @namespace    https://github.com/pchely/userscripts
// @version      1.2
// @description  Шаблоны сообщений для модераторов чата Фоксфорда
// @author       skhrvg
// @match        https://apps.foxford.ru/webinar*
// @grant        none
// @updateURL    https://github.com/pchely/userscripts/raw/master/ModeratorMessages.user.js
// @downloadURL  https://github.com/pchely/userscripts/raw/master/ModeratorMessages.user.js
// ==/UserScript==

(function () {
    'use strict'

    const messages = {
        rus: {
            "Приветствия": [
                "Дорогие учащиеся, мы рады приветствовать вас и желаем успешного прохождения сегодняшнего занятия!",
                "Добрый день, дорогие учащиеся! Презентация будет доступна в записи после вебинара. В случае возникновения сложностей с использованием платформы, просим сообщить об этом модератору. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
                "Добрый день, дорогие друзья! Презентация станет доступна ближе к концу занятия. В случае возникновения сложностей с использованием платформы, просим обратиться к модератору. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
                "Добрый день, дорогие учащиеся! Презентация доступна по ссылке (). В случае возникновения сложностей с использованием платформы, просим сообщить об этом. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
                "Добрый день, дорогие учащиеся! Презентация будет доступна в записи после вебинара или по желанию преподавателя в течении занятия. В случае возникновения сложностей с использованием платформы, просим обратиться к модератору. Не забывайте, что у нас имеются правила чата, поэтому не отвлекайтесь от занятия и не отвлекайте других.",
            ],
            "Технический перерыв": [
                "Друзья, по техническим причинам мы вынуждены уйти на технический перерыв. Обычно это занимает не более 5-ти минут, но в случае возникновении других неполадок, мы оповестим вас.",
                "К сожалению, нам не хватило обозначенного времени для решения возникших проблем, в связи с чем мы вынуждены продлить время технического перерыва.",
                "В процессе технического перерыва мы не смогли решить возникшие проблемы и вынуждены отменить сегодняшнее занятие. Мы будем рады видеть вас снова в следующий раз! Хорошего дня и успехов в учебе!",
            ],
            "Помощь": [
                "рекомендуем вам обновить страницу с занятием. Если данный способ не помог решить проблему, то попробуйте очистить кэш вашего браузера. Также, напоминаем, что для использования нашей платформы рекомендуется использовать браузер Google Chrome.",
                "также вы можете попробовать проверить ваше качество интернет-соединения на данном ресурсе (https://www.speedtest.net/ru). Для беспроблемного использования нашей платформы рекомендуется показатель не менее 50 Mbps. В ином случае, советуем вам связаться с вашим интернет-провайдером.",
                "в случае отсутствия успеха советуем воспользоваться перезагрузкой вашего устройства, а также сообщить о своей проблеме написав на данную почту: ask@foxford.ru.",
            ],
            "Бан": [
                "Дорогие учащиеся, просим вас прекратить флуд реакциями. Это отвлекает преподавателя и других учащихся. В ином случае, нам придется ограничить вам доступ к чату.",
                "просим вас прекратить флуд и не мешать остальным заниматься. В ином случае, мы будем вынуждены ограничить вам доступ к чату.",
                "на нашей платформе запрещена реклама посторонних занятию источников. В связи с чем просим вас прекратить их упоминание. В ином случае, нам придется ограничить вам доступ к чату.",
                "в рамках правил чата у нас запрещены угрозы, насилие и оскорбления. Мы просим вас с уважением отнестись к другим, в ином случае, мы будем вынуждены ограничить вам доступ к чату.",
                "на нашей платформе запрещено использовать ненормативную лексику и иные виды оскорблений. В случае нарушения данного правила, мы вынуждены ограничить вам доступ к чату.",
                "к сожалению, на нашей платформе запрещена фальсификация имени. Просим вас поменять никнейм на ваши Имя и Фамилия, написанные кириллицей. В ином случае, нам придется ограничить вам доступ к чату.",
                "Дорогие учащиеся, убедительная просьба следовать правилам чата. У нас запрещены спам, агрессия, капс-лок, фальсификация, а также ссылки на другие платформы. В случае повторных нарушений наших правил, мы будем вынуждены ограничить вам доступ к чату.",
            ],
            "Перерыв": [
                "Друзья, мы уходим на перерыв до (). Просим вас не расходится, мы продолжим занятие совсем скоро.",
                "Дорогие учащиеся, настало время перерыва! Встретимся с вами буквально через () минут и продолжим обсуждение сегодняшней темы.",
            ],
            "Прощание": [
                "Друзья, наше занятие подошло к концу. Спасибо, что оставались с нами, желаем вам хорошего дня и успехов в учебе. До скорых встреч!",
                "К сожалению, наше занятие подошло к концу, с нетерпением будем ждать вас снова! Желаем всем хорошего дня и успехов в учебе.",
                "Дорогие учащиеся, наше занятие подходит к концу. Спасибо, что были с нами до самого конца! Желаем успехов в учебе и хорошего дня!",
            ],
        },
        eng: {
            "🇬🇧 Приветствия": [
                "Dear students, we are glad to welcome you and hope you enjoy today's lesson!",
                "Good afternoon, dear students! The presentation will be available after the webinar. If you have any difficulties using our platform, please inform the moderator about it. Don't forget that we have chat rules, so don't get distracted from class or distract others.",
                "Hello, everybody! The presentation will become available at the end of the lesson. If you have any difficulties using our platform, please contact the moderator. Don't forget that we have chat rules, so don't get distracted from class or distract others.",
                "Glad to see you, dear students! Here you can find today's presentation (). If you encounter any difficulties using our platform, please let us know. Don't forget that we have chat rules, so don't get distracted from class or distract others.",
                "Happy to welcome you, our dear students! The presentation will be available at the request of the teacher. If you have any difficulties using our platform, please contact the moderator. Don't forget that we have chat rules, so don't get distracted from class or distract others.",
            ],
            "🇬🇧 Технический перерыв": [
                "Dear students, we are forced to go on a technical break. Usually, it takes no more than 5 minutes. In case of other problems, we'll notify you.",
                "Unfortunately, we didn't have enough time to solve technical issues that have arisen, so we have to extend the technical break.",
                "During the technical break, we didn't manage to solve technical problems. Today we are forced to cancel our lesson. We'd love to see you again next time! Have a nice day and good luck with your studies!",
            ],
            "🇬🇧 Помощь": [
                "please, refresh the webinar page. If this method does not solve your problem, then try clearing your browser's cache. We also remind you that our platform may not function properly if you aren't using Google Chrome.",
                "you can also check your Internet connection quality on this resource (https://www.speedtest.net/ru). For trouble-free use of our platform, a minimum of 50 Mbps is recommended. Otherwise, we advise you to contact your ISP.",
                "in case of failure, we advise you to reboot your device. Also, we'd like you to report the problem using this Email address: ask@foxford.ru.",
            ],
            "🇬🇧 Бан": [
                "Dear students, we ask you to stop flooding using reactions. This distracts the teacher and other students. Otherwise, we'll have to restrict access to the chat.",
                "we ask you to stop flooding and don't disturb others. Otherwise, we'll be forced to restrict access to the chat.",
                "It's not allowed to share ads from third-party sources on our platform. We ask you to stop mentioning these sources. Otherwise, we'll have to restrict access to the chat.",
                "as part of our chat rules: threats, violence, and insults are prohibited. Please, treat others with respect, otherwise, we'll be forced to restrict access to the chat.",
                "on our platform, it is forbidden to use obscene language and other types of insults. In case of violation of this rule, we are forced to restrict access to the chat.",
                "falsification isn't allowed on our platform. We ask you to change your nickname to your First Name and Last Name written in Cyrillic. Otherwise, we'll have to restrict access to the chat.",
                "Dear students, we kindly ask you to follow the rules of the chat. We don't allow spam, aggression, caps-lock, falsification, as well as links to other platforms. In case of repeated violations of our rules, we'll be forced to restrict access to the chat.",
            ],
            "🇬🇧 Перерыв": [
                "Dear students, we are leaving for a break until (). We ask you not to leave the class, we'll continue the lesson very soon.",
                "Dear students, it's time for a break! We'll see each other again in ()  minutes and continue the discussion of today's topic.",
            ],
            "🇬🇧 Прощание": [
                "Dear students, our lesson is coming to an end. Thank you for being with us until the very end! We wish you success in your studies and have a nice day!",
                "Unfortunately, our lesson has come to an end. We look forward to seeing you again! We wish you all a good day and success in your studies.",
            ],
        }
    }

    const styles = document.createElement('style')
    styles.innerHTML = `
#usmsg-button {
    position: absolute;
    top: var(--chat-input-emoji-button-top);
    left: calc(var(--chat-input-emoji-button-left) + 32px);
    background: none;
    margin: 0;
    padding: 0;
    height: var(--chat-emoji-button-height);
    width: var(--chat-emoji-button-width);
    border: none;
    outline: none;
    cursor: pointer;
    color: #B8B8B8;
}
#usmsg-button:hover {
    color: var(--chat-main-color-active);
}
#usmsg-container {
    position: absolute;
    bottom: var(--chat-input-min-height);
    padding: 0;
    width: 100%;
    box-shadow: var(--chat-input-emoji-list-icon-box-shadow);
    border: var(--chat-actions-menu-content-border);
    border-radius: var(--chat-actions-menu-content-border-radius);
    background-color: var(--chat-actions-menu-content-bg);
    max-height: 350px;
    overflow-y: auto;
    overflow-x: hidden;
}
#usmsg-container.hidden {
    display: none;
}
.usmsg-message {
    background: none;
    margin: 0.3rem 1.5rem;
    border: none;
    outline: none;
    cursor: pointer;
    text-align: left;
    padding: var(--chat-message-content-padding_aggregated);
    border-radius: var(--chat-message-border-radius);
    background-color: var(--chat-message-content-bg-color-me);
}
.usmsg-message-group {
    line-height: var(--chat-message-body-line-height);
    font-size: var(--chat-message-body-font-size);
    color: var(--chat-message-body-color);
}
.usmsg-message-group summary {
    padding: 0.8rem 1.5rem;
    cursor: pointer;
    font-weight: bold;
    position: sticky;
    top: 0;
    background-color: var(--chat-actions-menu-content-bg);
}
.usmsg-message-group summary:hover {
    background-color: #f6f6f6;
}
.usmsg-message-group:first-child summary {
    margin-top: 0.5rem;
}
.usmsg-message-group:last-child summary {
    margin-bottom: 0.5rem;
}
    `
    document.head.append(styles)

    const container = document.createElement('div')
    container.id = 'usmsg-container'
    container.classList.add('hidden')

    function toggleContainer() {
        container.style.bottom = document.querySelector('textarea[data-id="ulms-chat-textarea"]').parentElement.clientHeight + 'px'
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden')
            document.addEventListener("click", (evt) => {
                let targetElement = evt.target
                do {
                    if (targetElement == container || targetElement == button) return
                    targetElement = targetElement.parentNode
                } while (targetElement)
                container.classList.add('hidden')
                for (const group of container.children) group.open = false
            })
        } else {
            container.classList.add('hidden')
            for (const group of container.children) group.open = false
        }
    }

    const button = document.createElement('button')
    button.id = 'usmsg-button'
    button.type = 'button'
    button.innerHTML = `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.5 2C5.5 2 3 4.5 3 7.5C3 8.3 3.2 9 3.4 9.7L3.6 10L2.8 13.1L5.7 12.2L6 12.4C6.7 12.8 7.6 13 8.5 13C11.5 13 14 10.5 14 7.5C14 4.5 11.5 2 8.5 2ZM1 7.5C1 3.4 4.4 0 8.5 0C12.6 0 16 3.4 16 7.5C16 11.6 12.6 15 8.5 15C7.4 15 6.4 14.8 5.4 14.3L0 16L1.5 10.1C1.2 9.3 1 8.4 1 7.5Z" fill="currentColor"/><path d="M10.4688 4L8.5 5.96875L6.53125 4L5 5.53125L6.96875 7.5L5 9.46875L6.53125 11L8.5 9.03125L10.4688 11L12 9.46875L10.0312 7.5L12 5.53125L10.4688 4Z" fill="currentColor"/></svg>`
    button.onclick = () => {
        toggleContainer()
    }

    const usMessages = document.createElement('div')
    usMessages.id = 'usmsg'
    usMessages.appendChild(button)
    usMessages.appendChild(container)

    function insertMessage(msg) {
        const chatTextarea = document.querySelector('textarea[data-id="ulms-chat-textarea"]')
        if (chatTextarea) {
            chatTextarea.value += msg
            chatTextarea.focus()
            const placeholder = msg.indexOf('()')
            if (placeholder >= 0) chatTextarea.setSelectionRange(placeholder, placeholder + 2)
        }
    }

    //визуализация заготовленных сообщений (всех)
    function createList() {
        container.innerHTML = ''
        const buttonRus = document.createElement('button')

        for (const messageGroupName of Object.keys(messages.rus
        )) {
            const messageGroup = document.createElement('details')
            const messageGroupSummary = document.createElement('summary')
            messageGroupSummary.innerText = messageGroupName
            messageGroup.appendChild(messageGroupSummary)
            messageGroup.classList.add('usmsg-message-group')
            for (const message of messages.rus[messageGroupName]) {
                const messageButton = document.createElement('button')
                messageButton.classList.add('usmsg-message')
                messageButton.type = 'button'
                messageButton.innerText = message
                messageButton.onclick = () => {
                    insertMessage(message);
                    toggleContainer();
                }
                messageGroup.appendChild(messageButton)
            }
            container.appendChild(messageGroup)
        }
    }

    createList()

    //добавление кнопки сообщений на странице вебинара
    function init() {
        const chatTextarea = document.querySelector('textarea[data-id="ulms-chat-textarea"]')

        // ждем пока юзер нажмет на кнопку подключения
        if (!chatTextarea) return

        if (document.querySelector('#usmsg')) return

        // добавляем кнопку сообщений
        chatTextarea.style.paddingLeft = '80px'
        chatTextarea.parentElement.appendChild(usMessages)
    }

    //через секунду вызывается появление кнопки
    setInterval(() => init(), 1000)

    // function createLangButton() {
    //     const
    // }
})();
