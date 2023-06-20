class Form {
    constructor() {
        this.inputName = createInput("").attribute("placeholder", "Enter your name");
        this.inputchool = createInput("").attribute("placeholder", "Enter your school name");
        this.doneButton = createButton("Play");
        this.mainLogo = createImg('../logo.png', 'app logo');
    }

    setPositionAndWidth() {
        this.inputName.position(windowWidth / 2)
        this.inputchool.position(windowWidth / 2)
        this.doneButton.position(windowWidth / 2)
        this.titleImg.position(50, 10);
        this.inputName.class("customInput");
        this.inputchool.class("customButton");
        this.doneButton.class("greeting");
        this.mainLogo.class("gameTitle");
    }

    start() {
        this.mainArray();
    }

    hide = ()=>{
        this.inputName.x = windowWidth + 10000000000;
        this.inputchool.x = windowWidth + 10000000000;
        this.doneButton.x = windowWidth + 10000000000;
    }

    mainArray(){
        var array = []
        array.push({"schoolName":"GEMS New Millenium School"});
        array.push({"studentName":"Arjun Prabhu"}, {"studentName2":"Srinihas Akkineni"});

        if (this.inputchool === array[1] && this.inputName === array[0] || this.inputchool === array[2] && this.inputName === array[0]) {
            allowChangeScreen = true
        }
    }
}