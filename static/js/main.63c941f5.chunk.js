(this.webpackJsonpsongboard=this.webpackJsonpsongboard||[]).push([[0],{16:function(e,t,n){e.exports={mainContainer:"ChordGenerator_mainContainer__19rtf",h3:"ChordGenerator_h3__1DyjE",stringNote:"ChordGenerator_stringNote__3QiS9",fretNumber:"ChordGenerator_fretNumber__1j98V",noteText:"ChordGenerator_noteText__3ueta",mainImg:"ChordGenerator_mainImg__3wR3t",noteButtonContainer:"ChordGenerator_noteButtonContainer__3Q2Qg",noteButton:"ChordGenerator_noteButton__6PDAh",noteButtonImg:"ChordGenerator_noteButtonImg__2rdeF"}},25:function(e,t,n){e.exports={header:"Header_header__20eyr",button_row:"Header_button_row__3Bk9e",title_button:"Header_title_button__1tKvG",header_button:"Header_header_button__2CJ53"}},26:function(e,t,n){e.exports={Container:"Sidebar_Container__2d5BQ",Sidebar:"Sidebar_Sidebar__3_rLm",SidebarActive:"Sidebar_SidebarActive__qbNTi Sidebar_Sidebar__3_rLm",sidebarButton:"Sidebar_sidebarButton__1yFQ7",sidebarIcon:"Sidebar_sidebarIcon__3U8On"}},28:function(e,t,n){e.exports={Container:"Home_Container__1fcrI",mainPageButton:"Home_mainPageButton__2suUW"}},3:function(e,t,n){e.exports={noteMainContainer:"NoteSelector_noteMainContainer__2suQz",noteButtonContainer:"NoteSelector_noteButtonContainer__2yb0v",genericButton:"NoteSelector_genericButton__RcwX5",noteButton:"NoteSelector_noteButton__Ux5fk NoteSelector_genericButton__RcwX5",chordButton:"NoteSelector_chordButton__1NIxN NoteSelector_genericButton__RcwX5",noteButtonSelected:"NoteSelector_noteButtonSelected__1wpBM NoteSelector_noteButton__Ux5fk NoteSelector_genericButton__RcwX5",chordButtonSelected:"NoteSelector_chordButtonSelected__d1MhL NoteSelector_chordButton__1NIxN NoteSelector_genericButton__RcwX5",noteButtonSharp:"NoteSelector_noteButtonSharp__1w9L4 NoteSelector_genericButton__RcwX5",noteButtonSharpSelected:"NoteSelector_noteButtonSharpSelected__3o0d0 NoteSelector_noteButtonSharp__1w9L4 NoteSelector_genericButton__RcwX5"}},41:function(e,t,n){e.exports={Container:"App_Container__UEwRT"}},42:function(e,t,n){e.exports={Container:"NotFoundPage_Container__2NCpT"}},56:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(4),c=n.n(a),s=n(36),r=n.n(s),i=n(24);var d=function(){var e=c.a.useState(window.innerWidth),t=Object(i.a)(e,2),n=t[0],o=t[1],a=c.a.useState(window.innerHeight),s=Object(i.a)(a,2),r=s[0],d=s[1],l=c.a.useState(!1),h=Object(i.a)(l,2),u=h[0],j=h[1];return c.a.useEffect((function(){var e=function(){o(screen.width),d(screen.height)};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),c.a.useEffect((function(){j(r>n)})),{width:n,height:r,isDevice:u}},l=n(17),h=n(18),u=n(20),j=n(19),C=n(14),b=n(25),m=n.n(b),N=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(o.jsxs)("header",{className:m.a.header,children:[Object(o.jsxs)(C.b,{to:"/",children:[Object(o.jsx)("button",{className:m.a.title_button,children:"Basictheory.io"})," "]}),Object(o.jsxs)("div",{className:m.a.button_row,children:[Object(o.jsx)(C.b,{to:"/chordspage",children:Object(o.jsx)("button",{className:m.a.header_button,children:"Chords"})}),Object(o.jsx)(C.b,{to:"/scalespage",children:Object(o.jsx)("button",{className:m.a.header_button,children:"Scales"})})]})]})}}]),n}(a.Component),_=n(13),f=n(28),x=n.n(f),p=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={searchName:""},o.handleChange=o.handleChange.bind(Object(_.a)(o)),o}return Object(h.a)(n,[{key:"handleChange",value:function(){}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:x.a.Container,children:[Object(o.jsxs)(C.b,{to:"/chordspage",children:[" ",Object(o.jsx)("button",{className:x.a.mainPageButton,children:"Chord"})," "]}),Object(o.jsxs)(C.b,{to:"/scalespage",children:[" ",Object(o.jsx)("button",{className:x.a.mainPageButton,children:"Scales"})," "]})]})}}]),n}(a.Component),O=n(33);n(52);O.a.initializeApp({apiKey:"AIzaSyADAWhnUsK6O8h_QkXOZq2BJAQyMIGyNBo",authDomain:"basictheory-9d452.firebaseapp.com",databaseURL:"https://basictheory-9d452.firebaseio.com"});var B=O.a.database(),v=n(6),S=n.n(v),k=n(16),g=n.n(k),I=n.p+"static/media/chordFret.0ce51486.png",w=n.p+"static/media/noteButton.82f32475.png",y=n(38),D=n.n(y),A=["C","C#/Db","D","D#/Eb","E","F","F#/Gb","G","G#/Ab","A","A#/Bb","B"];function R(e,t){var n=A.findIndex((function(t){return t==e}));switch(t){case"1":case"8":return e;case"b2":return A[(n+1)%12];case"2":case"9":return A[(n+2)%12];case"b3":return A[(n+3)%12];case"3":return A[(n+4)%12];case"4":case"11":return A[(n+5)%12];case"b5":case"#11":return A[(n+6)%12];case"5":return A[(n+7)%12];case"b6":return A[(n+8)%12];case"6":case"bb7":case"13":return A[(n+9)%12];case"b7":return A[(n+10)%12];case"7":return A[(n+11)%12]}}function P(e,t){var n=0;switch(e){case 6:n=A.findIndex((function(e){return"E"==e}));break;case 5:n=A.findIndex((function(e){return"A"==e}));break;case 4:n=A.findIndex((function(e){return"D"==e}));break;case 3:n=A.findIndex((function(e){return"G"==e}));break;case 2:n=A.findIndex((function(e){return"B"==e}));break;case 1:n=A.findIndex((function(e){return"E"==e}))}var o=A.findIndex((function(e){return e==t}));return o<n?12-n+o:o-n}var G=window.AudioContext||window.webkitAudioContext||!1;if(G)var E=new G;else console.log("Sorry, but the Web Audio API is not supported by your browser. Please, consider upgrading to the latest version or downloading Google Chrome or Mozilla Firefox");function T(e,t,n){return E.resume(),D()(e).then((function(e){return e.arrayBuffer()})).then((function(e){return E.decodeAudioData(e,(function(e){return t(e,n)}))}))}function M(e,t){var n=E.createBufferSource();n.buffer=e,n.playbackRate.value=Math.pow(2,t/12);var o=E.createGain();o.gain.value=4,o.connect(E.destination),n.connect(o),n.connect(E.destination),n.start(0)}var L=n.p+"static/media/e_6.36e553bf.mp3",F=n.p+"static/media/a_5.c63ac53d.mp3",X=n.p+"static/media/d_4.9b989acb.mp3",q=n.p+"static/media/g_3.da52e213.mp3",Q=n.p+"static/media/b_2.d5c22064.mp3",U=n.p+"static/media/e_1.16ac1110.mp3";var H=function(e){function t(e){switch(e){case 6:return L;case 5:return F;case 4:return X;case 3:return q;case 2:return Q;case 1:return U}}function n(e){var n=-.25*Math.pow(e.noteInfo.fret,2)+19.25*e.noteInfo.fret-8.5,a=19*(7-e.noteInfo.string)-22.5,c={position:"absolute",top:"".concat(n,"%"),left:"".concat(a,"%"),display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"15%",height:"15%"};return Object(o.jsxs)("div",{style:c,children:[Object(o.jsx)("button",{onClick:function(){e.onNoteClick(e.noteInfo.noteNumber),T(t(e.noteInfo.string),M,P(e.noteInfo.string,R(e.rootNote,e.noteInfo.noteNumber)))},className:g.a.noteButton,children:Object(o.jsx)("img",{src:w,className:g.a.noteButtonImg})}),Object(o.jsx)("p",{className:g.a.noteText,children:e.noteInfo.noteNumber})]})}function a(e){var n=19*(7-e.noteInfo.string)-23.5,a={position:"absolute",top:"-30px",left:"".concat(n,"%"),display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center",width:"15%",height:"15%"};return Object(o.jsx)("div",{style:a,children:Object(o.jsx)("button",{onClick:function(){return"X"!=e.noteInfo.noteNumber&&(e.onNoteClick(e.noteInfo.noteNumber),void T(t(e.noteInfo.string),M,P(e.noteInfo.string,R(e.rootNote,e.noteInfo.noteNumber))))},className:g.a.noteButton,children:Object(o.jsx)("h3",{className:"X"==e.noteInfo.noteNumber?g.a.h3:g.a.stringNote,children:0==e.noteInfo.fret&&"X"!=e.noteInfo.noteNumber?"O":e.noteInfo.noteNumber})})})}var c=e.noteButtonPositions&&e.noteButtonPositions.find((function(e){return 0!=e.fret&&"1"==e.noteNumber}));void 0==c&&e.noteButtonPositions&&(c=e.noteButtonPositions.find((function(e){return 0!=e.fret&&"X"!=e.noteNumber})));var s=-.75*Math.pow(c.fret,2)+22.5*c.fret-12.5,r={position:"absolute",top:"".concat(s,"%"),left:"-31%",display:"flex",justifyContent:"right",alignItems:"center",textAlign:"right",width:"30%",height:"15%"},i=P(c.string,R(e.note,c.noteNumber));return Object(o.jsxs)("div",{className:g.a.mainContainer,children:[Object(o.jsx)("img",{src:I,className:g.a.mainImg}),e.noteButtonPositions&&e.noteButtonPositions.map((function(t){return 0==t.fret?Object(o.jsx)(a,{rootNote:e.note,onNoteClick:e.onNoteClick,noteInfo:t},e.noteButtonPositions.findIndex((function(e){return e==t}))):Object(o.jsx)(n,{rootNote:e.note,onNoteClick:e.onNoteClick,noteInfo:t},e.noteButtonPositions.findIndex((function(e){return e==t})))})),Object(o.jsx)("div",{style:r,children:Object(o.jsx)("h3",{className:g.a.fretNumber,children:0===i?12:i})})]})},z=n(39),J=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={moreShape:!1,selectedNote:"None",openChordData:void 0,shapeList:void 0},o.updateOpenChordData=o.updateOpenChordData.bind(Object(_.a)(o)),o.handleClick=o.handleClick.bind(Object(_.a)(o)),o.chordGeneratorNoteClick=o.chordGeneratorNoteClick.bind(Object(_.a)(o)),o}return Object(h.a)(n,[{key:"handleClick",value:function(e){this.setState((function(t){return{moreShape:e==S.a.arrowDownButton?!t.moreShape:t.moreShape}}))}},{key:"chordGeneratorNoteClick",value:function(e){this.setState({selectedNote:R(this.props.note,e)})}},{key:"updateOpenChordData",value:function(){var e=this;if(this.props.chord&&this.props.info&&this.props.info){var t="".concat(this.props.note).concat(this.props.chord);B.ref().child("OpenChords").orderByKey().equalTo(t).on("value",(function(n){e.setState({openChordData:n.exists()?n.val()[t]:"",shapeList:n.exists()?e.props.info.Shapes:e.props.info.Shapes.slice(1)})}))}}},{key:"componentDidMount",value:function(){this.updateOpenChordData()}},{key:"componentDidUpdate",value:function(e){e!=this.props&&(this.setState({selectedNote:"None"}),this.updateOpenChordData())}},{key:"render",value:function(){var e=this;return this.props.info?Object(o.jsxs)("div",{className:S.a.Container,children:[Object(o.jsxs)("h1",{className:S.a.h1,children:[this.props.info.FullName," Chord"]}),Object(o.jsxs)("div",{className:S.a.rowChordImgContainer,children:[Object(o.jsx)(H,{note:this.props.note,onNoteClick:this.chordGeneratorNoteClick,noteButtonPositions:this.state.openChordData?this.state.openChordData.Notes:this.props.info.Shapes[0].Notes}),Object(o.jsx)("div",{className:S.a.columnContainer,children:this.props.info.Notes.map((function(t){return Object(o.jsxs)("div",{className:S.a.noteDegreeRow,children:[Object(o.jsx)("h1",{className:S.a.noteText,children:R(e.props.note,t.num)}),Object(o.jsx)("p",{className:S.a.p,children:t.name})]},t.name)}))})]}),Object(o.jsxs)("div",{className:S.a.noteDegreeRow,children:[Object(o.jsx)("h2",{className:S.a.h2,children:"Selected Note:"}),Object(o.jsx)("h2",{children:this.state.selectedNote})]}),Object(o.jsxs)("div",{className:S.a.textContainer,children:[Object(o.jsx)("h2",{className:S.a.h2,children:"Description"}),Object(o.jsx)("p",{className:S.a.p,children:this.props.info.Description}),Object(o.jsx)("br",{}),Object(o.jsx)("h2",{className:S.a.h2,children:"Sound"}),Object(o.jsx)("p",{className:S.a.p,children:this.props.info.Sound})]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{className:S.a.rowChordImgContainer,children:Object(o.jsxs)("button",{className:S.a.arrowDownButton,onClick:function(){return e.handleClick(S.a.arrowDownButton)},children:[Object(o.jsx)("h2",{className:S.a.h2,children:Object(o.jsx)("strong",{children:"More Shapes"})}),Object(o.jsx)(z.a,{className:S.a.arrowDownImg})]})}),Object(o.jsxs)("div",{className:this.state.moreShape?S.a.moreChordContainerActive:S.a.moreChordContainer,children:[Object(o.jsxs)("div",{className:S.a.noteDegreeRow,children:[Object(o.jsx)("h2",{className:S.a.h2,children:"Selected Note:"}),Object(o.jsx)("h2",{children:this.state.selectedNote})]}),Object(o.jsx)("div",{className:S.a.moreChordRow,children:this.state.shapeList&&this.state.shapeList.map((function(t){return Object(o.jsx)(H,{note:e.props.note,onNoteClick:e.chordGeneratorNoteClick,noteButtonPositions:t.Notes},e.state.shapeList.findIndex((function(e){return e==t})))}))})]})]}):Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:S.a.p,children:"No chord selected!"})})}}]),n}(a.Component),K=n(7),W=n.n(K),Z=n(3),V=n.n(Z);var Y=function(e){return Object(o.jsx)("button",{className:e.className,onClick:function(){return e.onClick(e.value)},children:e.value})};var $=function(e){return Object(o.jsx)("div",{className:V.a.noteMainContainer,children:Object(o.jsxs)("div",{className:V.a.noteButtonContainer,children:[Object(o.jsx)(Y,{className:"C"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"C",onClick:e.onClick}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Y,{className:"C#"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"C#",onClick:e.onClick}),Object(o.jsx)(Y,{className:"Db"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"Db",onClick:e.onClick})]}),Object(o.jsx)(Y,{className:"D"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"D",onClick:e.onClick}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Y,{className:"D#"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"D#",onClick:e.onClick}),Object(o.jsx)(Y,{className:"Eb"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"Eb",onClick:e.onClick})]}),Object(o.jsx)(Y,{className:"E"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"E",onClick:e.onClick}),Object(o.jsx)(Y,{className:"F"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"F",onClick:e.onClick}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Y,{className:"F#"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"F#",onClick:e.onClick}),Object(o.jsx)(Y,{className:"Gb"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"Gb",onClick:e.onClick})]}),Object(o.jsx)(Y,{className:"G"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"G",onClick:e.onClick}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Y,{className:"G#"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"G#",onClick:e.onClick}),Object(o.jsx)(Y,{className:"Ab"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"Ab",onClick:e.onClick})]}),Object(o.jsx)(Y,{className:"A"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"A",onClick:e.onClick}),Object(o.jsxs)("div",{children:[Object(o.jsx)(Y,{className:"A#"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"A#",onClick:e.onClick}),Object(o.jsx)(Y,{className:"Bb"==e.selectedNote?V.a.noteButtonSharpSelected:V.a.noteButtonSharp,value:"Bb",onClick:e.onClick})]}),Object(o.jsx)(Y,{className:"B"==e.selectedNote?V.a.noteButtonSelected:V.a.noteButton,value:"B",onClick:e.onClick})]})})},ee=n(40),te=n(26),ne=n.n(te);var oe=function(e){var t=Object(a.useState)(!1),n=Object(i.a)(t,2),c=n[0],s=n[1];return Object(a.useEffect)((function(){document.querySelector(":root").style.setProperty("--overflow-y",c?"visible":"hidden")}),[c]),Object(a.useEffect)((function(){var t;t=e.toggle,s(t)}),[e.toggle]),Object(o.jsxs)("div",{className:ne.a.Container,children:[Object(o.jsx)(C.b,{to:"#",children:Object(o.jsx)("button",{className:ne.a.sidebarButton,onClick:function(){return s(!c)},children:Object(o.jsx)(ee.a,{className:ne.a.sidebarIcon})})}),Object(o.jsx)("div",{className:c?ne.a.SidebarActive:ne.a.Sidebar,children:e.children})]})},ae=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).state={selectedNote:"C",selectedChord:"maj",selectedChordInfo:void 0,sidebarToggle:!0},o.handleNoteButtonClick=o.handleNoteButtonClick.bind(Object(_.a)(o)),o.handleChordButtonClick=o.handleChordButtonClick.bind(Object(_.a)(o)),o}return Object(h.a)(n,[{key:"componentDidMount",value:function(){this.updateChordInfo()}},{key:"updateChordInfo",value:function(){var e=this;if(this.state.selectedChord){var t="maj7(#11)"==this.state.selectedChord?"maj7sharp11":this.state.selectedChord;B.ref().child("ChordTypes").orderByKey().equalTo(t).on("value",(function(n){return e.setState({selectedChordInfo:n.val()&&n.val()["".concat(t)]})}))}else this.setState({selectedChordInfo:void 0})}},{key:"handleNoteButtonClick",value:function(e){this.setState({selectedNote:e})}},{key:"handleChordButtonClick",value:function(e){var t=this;this.setState((function(n){return{selectedChord:"".concat(e.substring(t.state.selectedNote.length))==n.selectedChord?void 0:"".concat(e.substring(t.state.selectedNote.length)),sidebarToggle:"".concat(e.substring(t.state.selectedNote.length))!=t.state.selectedChord}}),(function(){return t.updateChordInfo()}))}},{key:"render",value:function(){return Object(o.jsxs)("div",{className:W.a.mainContainer,children:[Object(o.jsx)("div",{className:W.a.header,children:Object(o.jsx)($,{className:W.a.noteSelector,styles:W.a,selectedNote:this.state.selectedNote,onClick:this.handleNoteButtonClick})}),Object(o.jsxs)("div",{className:W.a.rowContainer,children:[Object(o.jsx)(oe,{toggle:this.state.sidebarToggle,children:Object(o.jsx)(J,{chord:this.state.selectedChord,note:this.state.selectedNote,info:this.state.selectedChordInfo})}),Object(o.jsxs)("div",{className:W.a.columnContainer,children:[Object(o.jsx)("h1",{className:W.a.h1,children:"Major"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"maj"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"maj7"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj7"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"maj9"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj9"),onClick:this.handleChordButtonClick})]}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"maj11"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj11"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"maj13"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj13"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"maj7(#11)"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"maj7(#11)"),onClick:this.handleChordButtonClick})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:W.a.h1,children:"Dominant"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"7"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"7"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"9"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"9"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"11"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"11"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"13"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"13"),onClick:this.handleChordButtonClick})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:W.a.h1,children:"Diminished"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"dim"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"dim"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"dim7"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"dim7"),onClick:this.handleChordButtonClick})]})]}),Object(o.jsxs)("div",{className:W.a.columnContainer,children:[Object(o.jsx)("h1",{className:W.a.h1,children:"Minor"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"min"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"min"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"min7"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"min7"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"min9"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"min9"),onClick:this.handleChordButtonClick})]}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"min11"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"min11"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"min13"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"min13"),onClick:this.handleChordButtonClick})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:W.a.h1,children:"Suspended"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"sus2"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"sus2"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"sus4"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"sus4"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"7sus4"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"7sus4"),onClick:this.handleChordButtonClick})]}),Object(o.jsx)("br",{}),Object(o.jsx)("h1",{className:W.a.h1,children:"Augmented"}),Object(o.jsxs)("div",{className:W.a.innerChordRow,children:[Object(o.jsx)(Y,{className:"aug"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"aug"),onClick:this.handleChordButtonClick}),Object(o.jsx)(Y,{className:"aug7"==this.state.selectedChord?V.a.chordButtonSelected:V.a.chordButton,value:"".concat(this.state.selectedNote,"aug7"),onClick:this.handleChordButtonClick})]})]})]})]})}}]),n}(a.Component),ce=n(8),se=n(41),re=n.n(se),ie=n(42),de=n.n(ie);var le=function(){return Object(o.jsxs)("div",{className:de.a.Container,children:[Object(o.jsx)("h1",{children:"404 Page Does Not Exist"}),Object(o.jsx)("h2",{children:"Maybe I'm still working on this page, chill!"})]})};var he=function(){var e=d().width;return Object(a.useEffect)((function(){document.querySelector(":root").style.setProperty("--device-width",e>1e3?"100%":"fit-content")}),[e]),Object(o.jsx)("div",{className:re.a.Container,children:Object(o.jsxs)(C.a,{basename:"/basictheory",children:[Object(o.jsx)(N,{}),Object(o.jsxs)(ce.c,{children:[Object(o.jsx)(ce.a,{path:"/",exact:!0,component:p}),Object(o.jsx)(ce.a,{path:"/homepage",component:p}),Object(o.jsx)(ce.a,{path:"/chordspage",component:ae}),Object(o.jsx)(ce.a,{component:le})]})]})})};r.a.render(Object(o.jsx)(a.StrictMode,{children:Object(o.jsx)(he,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={Container:"ChordInfo_Container__C3IG-",generalText:"ChordInfo_generalText__2gOEg",h1:"ChordInfo_h1__1ti7E ChordInfo_generalText__2gOEg",noteText:"ChordInfo_noteText__2Isnj ChordInfo_generalText__2gOEg",h2:"ChordInfo_h2__3JBhO ChordInfo_generalText__2gOEg",p:"ChordInfo_p__1tyq5 ChordInfo_generalText__2gOEg",arrowDownButton:"ChordInfo_arrowDownButton__2z7EF",arrowDownImg:"ChordInfo_arrowDownImg__1ETa1",rowChordImgContainer:"ChordInfo_rowChordImgContainer__PmIqV",noteDegreeRow:"ChordInfo_noteDegreeRow__1j0ad",noteDegreeRowIncrease:"ChordInfo_noteDegreeRowIncrease__3_UhM ChordInfo_noteDegreeRow__1j0ad",columnContainer:"ChordInfo_columnContainer__P5mZL",textContainer:"ChordInfo_textContainer__1QVS1",moreChordContainer:"ChordInfo_moreChordContainer__1llu-",moreChordContainerActive:"ChordInfo_moreChordContainerActive__xZn9t ChordInfo_moreChordContainer__1llu-",moreChordRow:"ChordInfo_moreChordRow__2vq8m"}},7:function(e,t,n){e.exports={mainContainer:"ChordsPage_mainContainer__1ZESD",h1:"ChordsPage_h1__1o7vf",header:"ChordsPage_header__vH971",rowContainer:"ChordsPage_rowContainer__3AIgr",columnContainer:"ChordsPage_columnContainer__2IvAP",innerChordRow:"ChordsPage_innerChordRow__18tss"}}},[[56,1,2]]]);
//# sourceMappingURL=main.63c941f5.chunk.js.map