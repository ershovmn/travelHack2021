chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log(tab, changeInfo)
    if(tab.status === 'complete') {
        let flag = false;
        data.sites.forEach(item => {
            item.rules.forEach(rule => {
                console.log(tab.url)
                if(new RegExp(rule.match).test(tab.url)) {
                    console.log(rule)
                    flag = true;
                    chrome.tabs.executeScript(tabId, {'file': 'content.js'}, () => {
                        chrome.tabs.executeScript(tabId, {code: `test(${JSON.stringify({
                            placement: rule.placement,
                            fields: rule.fields,
                        })})`})
                    })
                    return
                }
            })
            if(flag) return
        })
    }
})

let data = {
    sites: [
        {
            name: 'ihg',
            rules: [
                {
                    match: 'https://www.ihg.com/rewardsclub/ru/ru/enrollment/join',
                    placement: '.page-title-container',
                    fields: {
                        first_name: '#firstName',
                        last_name: '#lastName',
                        '2_email': '#email',
                    }
                }
            ]
        }, {
            name: 'marriott',
            rules: [
                {
                    match: 'https://www.marriott.com.ru/loyalty/createAccount/createAccountPage1.mi',
                    placement: '',
                    fields: {
                        first_name: '#field-first-name',
                        last_name: '#field-last-name',
                        '2_email': '#field-email',
                    }
                }
            ]
        }, {
            name: 'holidayclub',
            rules: [
                {
                    match: 'https://www.holidayclubresorts.com/ru/store/reservation/',
                    placement: '',
                    fields: {
                        first_name: '#firstName--1',
                        last_name: '#surname--2',
                        '7_country': '#country--6',
                        '2_email': '#email--8'
                    }
                }
            ]
        }
    ]
}

chrome.runtime.onMessage.addListener((mess, sender, sendReponse) => {
    if(mess.from === 'popup') {
        console.log('message')
        
        enterData()
    }
})

const enterData = () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        let tab = tabs[0];
        if(tab.status === 'complete') {
            let flag = false;
            data.sites.forEach(item => {
                item.rules.forEach(rule => {
                    console.log(tab.url)
                    if(new RegExp(rule.match).test(tab.url)) {
                        console.log(rule)
                        flag = true;
                        chrome.tabs.executeScript(tab.tabId, {'file': 'content.js'}, () => {
                            chrome.tabs.executeScript(tab.tabId, {code: `enterData(${JSON.stringify({
                                placement: rule.placement,
                                fields: rule.fields,
                                token: localStorage.getItem('token')
                            })})`})
                        })
                        return
                    }
                })
                if(flag) return
            })
        }
    });
}