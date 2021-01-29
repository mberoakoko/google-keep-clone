const CommandTypes ={
    CLOSE_DEFAULT_COMMAND_TYPE : "closeDefaultNoteCommand",
    CLOSE_LIST_COMMAND_TYPE : 'closeListType',
    OPEN_DRAW_COMMAND: 'openDrawCommandType',
    CLOSE_DEFAULT_THEN_OPEN_LIST_TYPE: 'closeDefaultThenOpenListType',
    CLOSE_DEFAULT_THEN_OPEN_DRAW: 'closeDefaultThenOpenDrawType'
}

class CloseDefaultNoteCommand{
    constructor(state) {
        this.type = CommandTypes.CLOSE_DEFAULT_COMMAND_TYPE
        this.closeState = state //boolean
    }
    execute(){
        return !this.closeState
    }
    undo(){
        return this.closeState
    }
}

class OpenListCommand{
    constructor(state) {
        this.type = CommandTypes.CLOSE_LIST_COMMAND_TYPE
        this.closeState = state
    }
    execute(){
        return !this.closeState
    }
    undo(){
        return this.closeState
    }
}
class OpenDrawCommand{
    constructor(state) {
        this.type = CommandTypes.OPEN_DRAW_COMMAND
        this.openState = state
    }
    execute(){
        return !this.openState
    }
    undo(){
        return this.openState
    }
}
class CloseDefaultThenOpenList{
    //The Condition is when defaultstate is false and list state is true
    constructor(defaultCommandState, listCommandState) {
        this.type = CommandTypes.CLOSE_DEFAULT_THEN_OPEN_LIST_TYPE
        this.closeDefaultCommand = new CloseDefaultNoteCommand(defaultCommandState)
        this.openListCommand = new OpenListCommand(listCommandState)
    }
    execute(){
        return {
            closedDefault : this.closeDefaultCommand.execute(),
            openList : this.openListCommand.execute()
        }
    }

    undo(){
        return {
            closedDefault : this.closeDefaultCommand.undo(),
            openList : this.openListCommand.undo()
        }
    }
}

class CloseDefaultThenOpenDraw{
    constructor(defaultState, drawState) {
        this.type = CommandTypes.CLOSE_DEFAULT_THEN_OPEN_DRAW
        this.closeDefaultCommand = new CloseDefaultNoteCommand(defaultState)
        this.openDrawCommand = new OpenDrawCommand(drawState)
    }

    execute(){
        return {
            closedDefault : this.closeDefaultCommand.execute(),
            openDraw : this.openDrawCommand.execute()
        }
    }
    undo(){
        return {
            closeDefault : this.closeDefaultCommand.undo(),
            openDraw : this.openDrawCommand.undo()

        }
    }

}

class NoteMorph{
    constructor() {
        this.state = {
            defaultState : true,
            listStateShow : false,
            drawStateShow: false
        };
        this.history = {
            defaultStateHistory : [],
            listStateShowHistory: [],
            drawStateShowHistory: [],
            closeDefaultThenOpenList: [],
            closeDefaultThenOpenDraw: []
        }
    }
    executeCommand(command){
        switch (command.type) {
            case CommandTypes.CLOSE_DEFAULT_COMMAND_TYPE: {
                this.state.defaultState = command.execute();
                this.history.defaultStateHistory.push(command);
                break;
            }
            case CommandTypes.CLOSE_LIST_COMMAND_TYPE: {
                this.state.listStateShow = command.execute();
                this.history.listStateShowHistory.push(command)
                break;
            }
            case CommandTypes.CLOSE_DEFAULT_THEN_OPEN_LIST_TYPE:{
                let executedCommands = command.execute()
                console.log(executedCommands)
                this.state.defaultState = executedCommands.closedDefault
                this.state.listStateShow = executedCommands.openList
                this.history.closeDefaultThenOpenList.push(command)
                break;
            }
            case CommandTypes.CLOSE_DEFAULT_THEN_OPEN_DRAW:{
                let executedCommands1 = command.execute()
                this.state.defaultState = executedCommands1.closedDefault
                this.state.drawStateShow = executedCommands1.openDraw
                this.history.closeDefaultThenOpenDraw.push(command)
                break;

            }
        }
    }
    undoCommand(command){
        switch (command.type){
            case CommandTypes.CLOSE_DEFAULT_COMMAND_TYPE: {
                let cachedCommand = this.history.defaultStateHistory.pop()
                console.log(cachedCommand)
                this.state.defaultState = cachedCommand.undo()
                break;
            }
            case CommandTypes.CLOSE_LIST_COMMAND_TYPE: {
                let cachedCommandList = this.history.listStateShowHistory.pop()
                this.state.listStateShow = cachedCommandList.undo()
                break;
            }
            case CommandTypes.CLOSE_DEFAULT_THEN_OPEN_LIST_TYPE:{
                let cachedCommandList2 = this.history.closeDefaultThenOpenList.pop()
                let executedCommand = cachedCommandList2.undo()
                this.state.defaultState = executedCommand.closedDefault
                this.state.listStateShow = executedCommand.openList
                break;
            }
            case CommandTypes.CLOSE_DEFAULT_THEN_OPEN_DRAW:{
                let cachedCommandList3 = this.history.closeDefaultThenOpenDraw.pop()
                let executedCommand = cachedCommandList3.undo()
                console.log(executedCommand)
                this.state.defaultState = executedCommand.closeDefault
                this.state.drawStateShow = executedCommand.openDraw
                break;
            }
        }
    }
}

/*let noteMorph = new NoteMorph();
console.log(noteMorph.state)
let testCommand = new CloseDefaultThenOpenDraw(noteMorph.state.defaultState, noteMorph.state.drawStateShow)
noteMorph.executeCommand(testCommand)
console.log(noteMorph.state)
noteMorph.undoCommand(testCommand)
console.log(noteMorph.state)*/


/*
 *TODO - Make this command Work
 */

export {NoteMorph, CloseDefaultThenOpenList, CloseDefaultThenOpenDraw}
