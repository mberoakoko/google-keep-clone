/* eslint no-use-before-define: 0 */

class Meta{
    constructor({reminders, color, image, drawImage, toDoList}={}) {
        this.reminders = reminders
        this.color = color
        this.image = image
        this.drawImage = drawImage
        this.toDoList = toDoList
    }
    convertToData(){
        return {
            reminders: this.reminders,
            color: this.color,
            image: this.image,
            drawImage: this.drawImage,
            toDoList: this.toDoList
        }
    }

}
class ListInterface{
    constructor( {pinned , title, content, meta } = {}) {
        this.type = "ListNote"
        this.pinned = pinned
        this.title = title
        this.content = content
        this.dateCreated = Date.now()
        this.meta = meta
    }

}
class DefaultNoteInterface{
    constructor({pinned , title, content, meta } = {}) {
        this.type = "DefaultNote"
        this.pinned = pinned
        this.title = title
        this.content = content
        this.dateCreated = Date.now()
        this.meta = meta
    }
    convertToData(){
        return {
            type: this.type,
            pinned: this.pinned,
            title: this.title,
            content: this.content,
            dateCreated: Date.now(),
            meta: this.meta.convertToData()
        }

    }
}
class DrawInterface{
    constructor({pinned , title, content, meta } = {}) {
        this.type = "DrawImage"
        this.pinned = pinned
        this.title = title
        this.content = content
        this.dateCreated = Date.now()
        this.meta = meta
    }


}

/*
let JsonData = JSON.parse(JSON.stringify(Data))
JsonData.push(new DefaultNoteInterface(
    {
        pinned: false,
        title: "New Title",
        content: "Some new Content",
        dateCreated: "this will be  Date ",
        meta: new Meta()
    }
).convertToData())
for (let i = JsonData.length -1; i > JsonData.length - 4; i--) {
    console.log(JsonData[i])
}
*/

export {DefaultNoteInterface, ListInterface, Meta, DrawInterface}
