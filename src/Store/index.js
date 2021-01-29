import {createStore} from "vuex/dist/vuex.esm-bundler";
import {CloseDefaultThenOpenList, NoteMorph,CloseDefaultThenOpenDraw} from "@/auxiliaryComponents/NoteMorph";

let noteState = new NoteMorph();
export  const store = createStore({
    state:{
        count: 1,
        otherThanClicked: false,
        listOpened: false,
        someObject: {
            value1: 1,
            value2: 1
        },
        noteState: noteState,
        testCommand: new CloseDefaultThenOpenList(noteState.state.defaultState, noteState.state.listStateShow),
        closeDefaultOpenDraw: new CloseDefaultThenOpenDraw(noteState.state.defaultState, noteState.state.drawStateShow),
        defaultState : noteState.state.defaultState,
        listState: noteState.state.listStateShow,
        drawState : noteState.state.drawStateShow,
        AppData: [{
            Type: "DefaultNote",
            Title: "Title Enters here",
            Pinned: false,
            DataCreate: "",
            meta: {
                reminders: "",
                color: "",
                image: "",
                drawImage: "",
                toDoList: "",
            },
            Content: 'My name is jeff'
        },{
            Type: "ListNote",
            Title: "Title Enters here",
            Pinned: false,
            DataCreate: "",
            meta: {
                reminders: "",
                color: "",
                image: "",
                drawImage: "",
                toDoList: "",
            },
            Content: [{
                content: "I am something To be done",
                done: true
            }, {
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            }
            ]
        },{
            type: "drawNote",
            title: "Title Enters here",
            pinned: false,
            dataCreate: "",
            meta: {
                reminders: "",
                color: "",
                image: "",
                drawImage: "",
                toDoList: "",
            },
            Content: ''
        },{
            Type: "ListNote",
            Title: "Title Enters here 2",
            Pinned: false,
            DataCreate: "",
            meta: {
                reminders: "",
                color: "",
                image: "",
                drawImage: "",
                toDoList: "",
            },
            Content: [{
                content: "I am something To be done",
                done: true
            }, {
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            },{
                content: "I am something To be done",
                done: true
            },{
                content: "I am something To be done",
                done: false
            }
            ]
        },

        ]
    },
    mutations: {
       increment(state){
           state.count+= 50**2
       },
        closeToolkitDropdown(state){
           state.otherThanClicked = !state.otherThanClicked
        },
        closeListComponent(state){
           state.listOpened = false
        },
        morphTest(state){
           //let testCommand = new CloseDefaultThenOpenList(state.defaultState, state.listState)
            state.noteState.executeCommand(state.testCommand)
            state.defaultState = state.noteState.state.defaultState
            state.listState = state.noteState.state.listStateShow
        },
        undoMorphTest(state){
            state.noteState.undoCommand(state.testCommand)
            state.defaultState = state.noteState.state.defaultState
            state.listState = state.noteState.state.listStateShow
        },
        morphNoteAndDraw(state){
            state.noteState.executeCommand(state.closeDefaultOpenDraw)
            state.defaultState = state.noteState.state.defaultState
            state.drawState = state.noteState.state.drawStateShow
            console.log(state.drawState)
        },
        undoMorphNoteAndDraw(state){
           state.noteState.undoCommand(state.closeDefaultOpenDraw)
            console.log(state.noteState.state.closeDefaultOpenDraw)
            state.defaultState = state.noteState.state.defaultState
            state.drawState = state.noteState.state.drawStateShow
        },
        mutateStatusOfTaskList(state, {parentItem, childItem}){
           let indexOfData = state.AppData.indexOf(parentItem)
            let indexOfItem = state.AppData[indexOfData].Content.indexOf(childItem)
            state.AppData[indexOfData].Content[indexOfItem].done = !state.AppData[indexOfData].Content[indexOfItem].done
        },
        pushNewDefaultNote(state, payload) {
           state.AppData.push(payload)
        }

    },
    getters: {
        getCount : state => {
            return state.count
        },
        getOtherThanClicked : state => {
            return state.otherThanClicked
        },
        getListOpenedState: state =>{
            return state.listOpened
        },
        getDefaultState: state =>{
            return state.noteState.state.defaultState
        },
        getListState: state =>{
            return state.noteState.state.listStateShow
        },
        getDrawState: state =>{
            return state.noteState.state.drawStateShow
        },
        getAppData: state =>{
            return state.AppData
        }
    }
})
