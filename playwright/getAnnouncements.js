const { chromium } = require('playwright');
const fs = require('fs');

async function getAnnouncements() {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    var announcements = [];
    var sidebarInfo = [];

    await page.goto("https://eg.poly.edu");

    const aLocator = await page.locator(".content > .panel").all();

    for (const element of aLocator) {
        let heading = await element.locator(".panel-heading").innerText();
        let body = await element.locator(".panel-body").innerText();
        var footer = await element.locator(".panel-footer").innerText();

        footer = footer.replace(/Posted on: /, "");

        announcements.push({
            heading: heading,
            body: body,
            footer: footer
        });
    }

    const sidebarLocator = await page.locator("#sidebar > .panel").all();

    for (const element of sidebarLocator) {
        let heading = await element.locator(".panel-heading").innerText();
        let listItems = await element.locator(".list-group > .list-group-item").all();

        let list = [];

        for (const item of listItems) {
            let text = await item.innerText();
            list.push(text);
        }

        sidebarInfo.push({
            heading: heading,
            list: list
        })

        console.log(sidebarInfo)
    }

    let announcementsString = JSON.stringify(announcements, null, 2);
    let sidebarInfoString = JSON.stringify(sidebarInfo, null, 2);


    fs.writeFile("announcements.json", announcementsString, (error) => {
        if (error) { throw error; }
    })

    fs.writeFile("sidebarInfo.json", sidebarInfoString, (error) => {
        if (error) { throw error; }
    })

    browser.close();
}

getAnnouncements();