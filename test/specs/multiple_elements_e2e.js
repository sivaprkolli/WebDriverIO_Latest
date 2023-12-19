describe("Get Multple Elements Text", async()=>{
    it("click on one element based on text", async()=> {

        await browser.url("https://para.testar.org/parabank/about.htm;jsessionid=FB240F858FA900BA96DEE5A980656F85");

        await browser.waitUntil(
            async ()=> await $("//*[text()='Customer Login']").isDisplayed(),
            {
                timeout: 10000,
                interval: 2000,
                timeoutMsg: "Element not found"
            }
        );

            const menus = await $$(".leftmenu > li")

            for(let i=0; i<await menus.length; i++){
                console.log(await menus[i].getText())

                if(await menus[i].getText() == "Locations"){
                    await menus[i].click();

                }
            }

            await browser.pause(5000);



    })
})