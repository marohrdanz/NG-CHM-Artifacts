'use strict';(function(){function p(a){if("undefined"===typeof a||!a.classList.contains("disabled")){var e=m.getHeatMap().getMapInformation().name;a=document.getElementById("column_dendro_canvas");var d=document.getElementById("row_dendro_canvas"),c=document.createElement("a"),f=new Image,q=new Image,r=new Image;l(a,200,50,c,function(a){f.onload=function(){l(d,50,200,c,function(a){q.onload=function(){l(n.canvas,200,200,c,function(a){r.onload=function(){z(f,q,r,200,200,c,function(a){c.setAttribute("href",
a.toDataURL("image/png"));c.setAttribute("download",e+"_tn.png");document.body.appendChild(c);c.click();c.remove()})};r.src=a.toDataURL("image/png")})};q.src=a.toDataURL("image/png")})};f.src=a.toDataURL("image/png")})}}function z(a,e,d,c,f,q,r){var g=document.createElement("canvas"),h=g.getContext("2d");h.imageSmoothingEnabled=!1;var k=m.getHeatMap(),t=k.getRowDendroConfig().show;k=k.getColDendroConfig().show;k="NONE"===k||"NA"===k?!1:!0;t="NONE"===t||"NA"===t?!1:!0;var b=c,l=f,u=!1===k?0:f/4,v=
!1===t?0:c/4;g.width=c+v;g.height=f+u;var n=0,p=0;!0===k?(h.drawImage(a,v,0,c,u),p=u):l+=u;!0===t?(h.drawImage(e,0,u,v,f),n=v):b+=v;h.drawImage(d,n,p,b,l);r(g,q)}function l(a,e,d,c,f){var b=new Image;a=a.toDataURL("image/png");10>a.length?UHM.systemMessage("Download Thumbnail Warning","The Summary Pane must be open and visible in the NG-CHM Viewer in order to download a thumbnail image of the heat map."):(b.onload=function(){var a=document.createElement("canvas"),g=a.getContext("2d");g.imageSmoothingQuality=
"high";g.mozImageSmoothingEnabled=!1;g.imageSmoothingEnabled=!1;a.width=2*e;a.height=2*d;g.drawImage(b,0,0,2*e,2*d);var h=new Image;h.onload=function(){var a=document.createElement("canvas"),b=a.getContext("2d");b.imageSmoothingQuality="high";b.mozImageSmoothingEnabled=!1;b.imageSmoothingEnabled=!1;a.width=e;a.height=d;b.drawImage(h,0,0,e,d);f(a,c)};h.src=a.toDataURL("image/png")},b.src=a)}NgChm.markFile();const y={downloadSummaryPng:p,downloadSummaryMapPng:function(){var a=m.getHeatMap().getMapInformation().name,
b=n.canvas.toDataURL("image/png"),d=document.createElement("a");l(b,200,200,d,function(c){d.setAttribute("href",c.toDataURL("image/png"));d.setAttribute("download",a+"_tnMap.png");document.body.appendChild(d);d.click();d.remove()})},editWidget:function(a){a=a||[];-1!==a.indexOf("noheader")&&document.getElementById("mdaServiceHeader").classList.add("hide");-1!==a.indexOf("nopanelheaders")&&(w.showPaneHeader=!1);-1!==a.indexOf("nodetailview")&&(b.showDetailPane=!1,document.getElementById("summary_box_canvas").classList.add("hide"));
-1!==a.indexOf("showSummaryCovariateLabels")&&(n.flagDrawClassBarLabels=!0);-1!==a.indexOf("noBuilderUploads")&&(A.enableBuilderUploads=!1)},hideEmbed:function(a){var e=window.frameElement;e.className="ngchmThumbnail";var d=document.getElementById("NGCHMEmbedWrapper"),c=document.getElementById("NGCHMEmbed");"undefined"===typeof a?(e.style.height=b.embedThumbHeight,d.style.height=b.embedThumbHeight,c.style.height=b.embedThumbHeight):(e.style=a,d.style=a,c.style=a);a=document.getElementById("NGCHMEmbedCollapse");
c.style.display="none";a.style.display="none";d.style.display=""},loadAllTilesTimer:function(){var a=m.getHeatMap();a=a.getNumRows(x.DETAIL_LEVEL)+a.getNumColumns(x.DETAIL_LEVEL);return 1E3>=a?500:2E3>=a?1E3:3E3>=a?2E3:4E3>=a?3E3:5E3>=a?4E3:6E3>=a?5E3:1E4},heatMapLoaded:function(){return null!==m.getHeatMap()},getSummaryHist:function(a){const b=m.getHeatMap();return b.getSummaryHist(b.getCurrentDL(),+a[0],+a[a.length-1])},getLinkoutTypes:function(){return new Promise(a=>{NgChm.CUST.waitForPlugins(()=>
{a(NgChm.CUST.linkoutTypes.slice(0))})})}};NgChm.createNS("NgChm.API",y);const b=NgChm.importNS("NgChm.UTIL"),x=NgChm.importNS("NgChm.MAPREP"),m=NgChm.importNS("NgChm.MMGR"),n=NgChm.importNS("NgChm.SUM"),w=NgChm.importNS("NgChm.Pane");NgChm.importNS("NgChm.DEV");const B=NgChm.importNS("NgChm.PDF"),A=NgChm.importNS("NgChm.LNK");NgChm.exportToNS("NgChm.API",{b64toBlob:b.b64toBlob,jsPDF:(...a)=>jspdf.jsPDF.apply(null,a),generatePDF:B.openPdfPrefs,chmResize:()=>w.resizeNGCHM()});Object.assign(b,y);document.getElementById("menuPng").onclick=
function(a){p(a.target)}})();
'use strict';NgChm.importNS("NgChm.UI-Manager").onLoadCHM();