linkouts.setVersion("2022-11-20");linkouts.addPanePlugin({name:"2D ScatterPlot",helpText:"Creates a two-dimensional scatter plot",params:{},src:"https://www.ngchm.net/Plugins/ScatterPlot/index.html"});linkouts.addPanePlugin({name:"3D ScatterPlot",helpText:"Creates a three-dimensional scatter plot",params:{},src:"https://www.ngchm.net/Plugins/ScatterPlot3D/index.html"});linkouts.addPanePlugin({name:"PathwayMapper",helpText:"Pathway Mapper",params:{},src:"https://www.ngchm.net/Plugins/PathwayMapper/index.html"});
(function(a){a.addSubtype("bio.gene.hugo","bio.pubmed");a.addSubtype("bio.mirna","bio.pubmed");a.addSubtype("bio.gene.entrez","bio.gene.entrezid");a.addSubtype("bio.pubmed","search");a.describeTypes([{typeName:"bio.genome.position",displayName:"Genome Position/Range",description:"Genome position/range",examples:"chr2:80123456-80234567",format:"chromosome abbreviation, a colon, a numeric position, a hyphen, a numeric position"},{typeName:"bio.gene.hugo",displayName:"HUGO gene symbol",description:"The official HUGO symbol for a gene.",
examples:"TP53",format:"Latin letters and Arabic numerals, usually without punctuation."},{typeName:"bio.go",displayName:"Gene Ontology accession identifier",description:"A Gene Ontology (GO) accession identifier.",examples:"GO:0007015",format:"Letters G and O, a colon, and a seven-digit number."},{typeName:"bio.transcriptid",displayName:"Entrez transcription identifier",description:"An Entrez transcription identifier",format:"ENST###########"},{typeName:"bio.mirna",displayName:"miRNA identifier",
description:"An miRNA identifier"},{typeName:"bio.pathway.msigdb.name",displayName:"msig DB pathway name",description:"A Pathway Name as defined by the msig DB"},{typeName:"bio.gene.entrezid",displayName:"NCBI Entrez Gene Identifier",description:"Numeric Id representing a gene as defined by NCBI"},{typeName:"bio.protein.uniprotid",displayName:"Uniprot protein identifier",description:"A Uniprot protein identifier."},{typeName:"bio.geo.acc",displayName:"GEO accession id",description:"A Gene Expression Omnibus (GEO) accession id"},
{typeName:"bio.pubmed",displayName:"PubMed identifier",description:"A PubMed Identifier, (Integer ID)",format:"an integer"},{typeName:"bio.transcript.ensembl",displayName:"Ensembl transcript identifier",description:"An Ensembl transcript identifier"},{typeName:"bio.gdc.case.uuid",displayName:"GDC Case UUID",description:"UUID for identifying specific GDC cases",format:"A hypenated text string with five components"},{typeName:"scholar",displayName:"Google Scholar search term",description:"A text string used to search for something in Google Scholar"},
{typeName:"search",displayName:"Generic search term",description:"A text string used to search for something"}])})(linkouts);(function(a){a.addPlugin({name:"Amigo",description:"Adds linkouts to Amigo gene ontology database.",version:"0.1.0",site:"http://amigo.geneontology.org/amigo",linkouts:[{menuEntry:"View Amigo",typeName:"bio.go",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("http://amigo.geneontology.org/amigo/term/"+b[0],"GeneOntology")}}]})})(linkouts);
(function(a){a.addPlugin({name:"BioGPS",description:"Adds linkouts to the BioGPS gene annotation portal.",version:"0.1.0",site:"https://biogps.org/",logo:"https://biogps.org/assets/img2/biogps_logo.png",linkouts:[{menuEntry:"View bioGPS",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://biogps.org/search/?q="+b[0],"bioGPS",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"Cancer Digital Slide Archive",site:"https://cancer.digitalslidearchive.org/",logo:"https://cancer.digitalslidearchive.org/img/CDSA_Slide_50.png",description:"Adds linkouts to the Cancer Digitial Slide Archive of TCGA digital slide images.",version:"0.3.0",linkouts:[{menuEntry:"View SlideArchive",typeName:"bio.tcga.barcode.sample",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0].substr(0,12);a.openUrl("https://cancer.digitalslidearchive.org/?__reload="+b+"#!/CDSA/byPatientID/"+
b,"SlideArchive")}}]})})(linkouts);
(function(a){function b(c){var d=a.getAttribute("cbioportal.study");a.openUrl("https://www.cbioportal.org/case.do?cancer_study_id="+d+"&case_id="+c[0],"cbio",{noframe:!0})}a.describeTypes([{typeName:"bio.cbioportal.sampleid",displayName:"cBioPortal Sample Identifier",description:"An identifier that refers to a specific sample in cBioPortal."}]);a.addPlugin({name:"cBioPortal",description:"Adds linkouts to the cBioPortal for Cancer Genomics.",version:"0.2.0",logo:"https://www.cbioportal.org/images/cbioportal_logo.png",site:"https://www.cbioportal.org/",
attributes:[{name:"cbioportal.study",description:"cBioPortal study identifier"}],linkouts:[{menuEntry:"View in cBio Portal",typeName:"bio.cbioportal.sampleid",selectMode:a.SINGLE_SELECT,linkoutFn:b,attributes:["cbioportal.study"]},{menuEntry:"View in cBio Portal",typeName:"bio.tcga.barcode.sample",selectMode:a.SINGLE_SELECT,linkoutFn:function(c){c=c[0].substring(0,12);b([c])},attributes:["cbioportal.study"]},{menuEntry:"View in cBio Portal",typeName:"bio.gene.hugo",selectMode:a.MULTI_SELECT,linkoutFn:function(c){var d=
a.getAttribute("cbioportal.study");a.openUrl("https://www.cbioportal.org/results?case_set_id="+d+"_all&cancer_study_list="+d+"&gene_list="+c.join(","),"cbio",{noframe:!0})},attributes:["cbioportal.study"]}]})})(linkouts);
(function(a){a.addPlugin({name:"CIViC",description:"Adds linkouts to the CIViC Mutation Database",version:"0.1.0",site:"https://civicdb.org",logo:"https://civicdb.org/assets/images/civic-logo_sidebar-expanded.png",linkouts:[{menuEntry:"View CIViC",typeName:"bio.gene.entrezid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://civicdb.org/links/entrez_id/"+b[0])}}]})})(linkouts);
(function(a){a.addPlugin({name:"COSMIC",description:"Adds linkouts to the Catalogue of somatic mutations in cancer (COSMIC).",version:"0.1.1",site:"https://cancer.sanger.ac.uk/cosmic",logo:"https://cancer.sanger.ac.uk/cancergenome/gfx/logo_cosmic.png",linkouts:[{menuEntry:"View Cosmic",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://cancer.sanger.ac.uk/cosmic/gene/analysis?ln="+b[0],"Cosmic",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"Decipher",description:"Adds linkouts to the Decipher database",version:"0.1.0",site:"https://decipher.sanger.ac.uk/",logo:"https://decipher.sanger.ac.uk/img/decipher-logo.png",linkouts:[{menuEntry:"View Decipher",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://decipher.sanger.ac.uk/search?q="+b[0],"Decipher",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"DepMap",description:"Adds linkouts to the DepMap Portal",version:"0.1.0",site:"https://depmap.org/portal/",logo:"https://depmap.org/portal/static/img/nav_footer/banner_logo_depmapportal.svg",linkouts:[{menuEntry:"View depmap",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://depmap.org/portal/gene/"+b[0]+"?tab=overview")}}]})})(linkouts);
(function(a){a.addPlugin({name:"Ensembl",description:"Adds linkouts to Ensembl genome browser.",version:"0.1.1",site:"https://www.ensembl.org/index.html",logo:"https://www.sanger.ac.uk/sites/default/files/ensembl_1.gif",linkouts:[{menuEntry:"Search Ensembl",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||"Homo_sapiens";a.openUrl("https://ensembl.org/Multi/psychic?site=ensembl&species="+c+"&q="+b,"Ensembl")}},{menuEntry:"Search Ensembl",
typeName:"bio.transcript.ensembl",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||"Homo_sapiens";a.openUrl("https://ensembl.org/Multi/psychic?site=ensembl&species="+c+"&q="+b,"Ensembl")}}]})})(linkouts);
(function(a){a.addPlugin({name:"FireBrowse",description:"Adds linkouts to FireBrowse.",version:"0.1.0",site:"http://firebrowse.org/",linkouts:[{menuEntry:"View FireBrowse",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];a.openUrl("http://firebrowse.org/viewGene.html?gene="+b+"&search="+b,"FireBrowse")}}]})})(linkouts);
(function(a){a.addPlugin({name:"GDC",description:"Adds linkouts to the GDC Data Portal.",version:"1.0.0",site:"http://www.portal.gdc.cancer.gov/",logo:"https://portal.gdc.cancer.gov/static/media/NHI_GDC_DataPortal-logo.23e6ca47.svg",linkouts:[{menuEntry:"View GDC Gene",typeName:"bio.transcript.ensembl",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://portal.gdc.cancer.gov/genes/"+b[0],"GDC")}},{menuEntry:"View GDC Case",typeName:"bio.gdc.case.uuid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://portal.gdc.cancer.gov/cases/"+
b[0],"GDC")}}]})})(linkouts);(function(a){a.addPlugin({name:"GeneCards",description:"Adds linkouts to the GeneCards Human Gene Card Database.",version:"0.1.2",site:"https://www.genecards.org/",logo:"https://www.genecards.org/Images/logo_genecards.png",linkouts:[{menuEntry:"View GeneCards",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("http://www.genecards.org/Search/Keyword?queryString="+b[0],"GeneCards")}}]})})(linkouts);
(function(a){a.addPlugin({name:"GeneVisible",description:"Adds linkouts to the GeneVisible portal.",version:"0.1.2",site:"https://genevisible.com",logo:"https://genevisible.com/img/genevisible_logo.svgz",linkouts:[{menuEntry:"View GeneVisible",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://genevisible.com/tissues/HS/Gene%20Symbol/"+b[0],"GeneVisible")}},{menuEntry:"View GeneVisible",typeName:"bio.protein.uniprotid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://genevisible.com/tissues/HS/UniProt/"+
b[0],"GeneVisible")}}]})})(linkouts);
(function(a){function b(c){a.openUrl("https://google.com/search?q="+c.join("+"),"google",{noframe:!0})}a.addSubtype("bio.gene.hugo","scholar");a.addSubtype("bio.mirna","scholar");a.addPlugin({name:"Google Scholar",description:"Add linkout to search Google Scholar.",version:"0.1.2",site:"https://scholar.google.com/schhp?hl=en",logo:"https://scholar.google.com/intl/en/scholar/images/1x/googlelogo_color_270x104dp.png",linkouts:[{menuEntry:"Search Google Scholar",typeName:"scholar",selectMode:a.MULTI_SELECT,
linkoutFn:function(c){a.openUrl("https://scholar.google.com/scholar?q="+c.join("+OR+"),"pubmed",{noframe:!0})}},{menuEntry:"Search Google",typeName:"search",selectMode:a.SINGLE_SELECT,linkoutFn:b},{menuEntry:"Search Google for all",typeName:"search",selectMode:a.MULTI_SELECT,linkoutFn:b}]})})(linkouts);
(function(a){a.addPlugin({name:"GTEx Portal",description:"Adds linkouts to the GTEx Portal",version:"0.1.0",site:"https://gtexportal.org/home/",logo:"https://gtexportal.org/img/gtex2.1a2a339c.png",linkouts:[{menuEntry:"View GTEx",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://gtexportal.org/home/gene/"+b[0],"GTEx",{noframe:!0})}}]})})(linkouts);(function(a){})(linkouts);
(function(a){a.addPlugin({name:"Ideogram Viewer",description:"Adds linkouts for viewing a set of genes and/or mirs on an interactive ideogram.",version:"0.1.1",site:"https://bioinformatics.mdanderson.org/public-software/ideogramviewer/",logo:"https://bioinformatics.mdanderson.org//public-software/ideogramviewer/IdeogramViewerLogo.png",linkouts:[{menuEntry:"View ideogram",typeName:"bio.gene.hugo",selectMode:a.MULTI_SELECT,linkoutFn:function(b){a.openUrl("https://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?genelist1="+
b.join(","),"Ideogram")}},{menuEntry:"View ideogram",typeName:"bio.mirna",selectMode:a.MULTI_SELECT,linkoutFn:function(b){b=b.map(function(c){return c.substring(0,c.lastIndexOf(".MIMAT"))});a.openUrl("https://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?mirlist1="+b.join(","),"ideogram")}}],matrixLinkouts:[{menuEntry:"View ideogram",typeName1:["bio.gene.hugo"],typeName2:["bio.gene.hugo"],selectMode:a.MULTI_SELECT,linkoutFn:function(b){var c=b.Column;a.openUrl("https://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?genelist1="+
b.Row.join(",")+"&genelist2="+c.join(","),"ideogram")}},{menuEntry:"View ideogram",typeName1:["bio.mirna"],typeName2:["bio.mirna"],selectMode:a.MULTI_SELECT,linkoutFn:function(b){var c=b.Row.map(function(d){return d.substring(0,d.lastIndexOf(".MIMAT"))});b=b.Column.map(function(d){return d.substring(0,d.lastIndexOf(".MIMAT"))});a.openUrl("https://bioinformatics.mdanderson.org/ideogramviewer/Ideogram.html?mirlist1="+c.join(",")+"&mirlist2="+b.join(","),"ideogram")}}]})})(linkouts);
(function(a){a.addPlugin({name:"MaveDB Variant Effects Database",description:"Adds linkout to search MaveDB.",version:"0.1.0",site:"https://www.mavedb.org",linkouts:[{menuEntry:"Search MaveDB",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||"Homo_sapiens";a.openUrl("https://mavedb.org/search/?organism="+c+"&search="+b,"MaveDB",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"miRBase",description:"Adds links to miRBase.",version:"0.1.1",site:"https://www.mirbase.org/",logo:"https://www.mirbase.org/images/mirbase-logo-blue-web.png",linkouts:[{menuEntry:"View miRBase Page",typeName:"bio.mirna",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];b=b.substr(b.lastIndexOf(".MIMAT")+1);a.openUrl("https://www.mirbase.org/textsearch.shtml?q="+b,"miRBase")}}]})})(linkouts);
(function(a){a.addPlugin({name:"MSigDB",description:"Adds linkouts to MSigDB pathways database",version:"0.1.1",site:"https://software.broadinstitute.org/gsea/index.jsp",logo:"https://software.broadinstitute.org/gsea/images/GSEA-logo.gif",linkouts:[{menuEntry:"View MSigDB",typeName:"bio.pathway.msigdb.name",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://software.broadinstitute.org/gsea/msigdb/cards/"+b[0]+".html","Uniprot")}}]})})(linkouts);
(function(a){a.addPlugin({name:"MuPIT",description:"Adds linkouts to MuPIT Interactive.",version:"0.1.0",site:"https://mupit.icm.jhu.edu/MuPIT_Interactive/",logo:"https://mupit.icm.jhu.edu/MuPIT_Interactive/images/muPITlog.gif",linkouts:[{menuEntry:"View MuPIT",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b.sort().filter(function(c,d,e){return d==e.indexOf(c)});b=encodeURIComponent(b[0]);a.openUrl("http://mupit.icm.jhu.edu/MuPIT_Interactive?gene="+b,"MuPIT")}}]})})(linkouts);
(function(){linkouts.describeTypes([{typeName:"bio.metabolite.MW.name",displayName:"Metabolomics Workbench Metabolite name",description:"Latin letters and Arabic numerals"},{typeName:"bio.metabolite.MW.regno",displayName:"Metabolomics Workbench Regno id",description:"Numeric Id"},{typeName:"bio.metabolite.refmet",displayName:"refmet name",description:"Latin letters and Arabic numerals"},{typeName:"bio.metabolite.hmdb",displayName:"HMDB Metabolite Id",description:"An ID starting with HMDB"},{typeName:"bio.compound.pubchem",
displayName:"Pubchem id",description:"Numeric Id"},{typeName:"bio.compound.kegg",displayName:"KEGG Compound Id",description:"An ID"},{typeName:"bio.compound.chebi",displayName:"ChEBI Compound Id",description:"Numeric ID"},{typeName:"bio.compound.metacyc",displayName:"MetaCyc Compound Id",description:"Latin letters, Arabic numerals, hyphens (e.g. CPD-6989)"}]);linkouts.addPlugin({name:"MWannotation",description:"Adds linkouts to Metabolomics name",version:"0.1.0",site:"https://www.metabolomicsworkbench.org/",
linkouts:[{menuEntry:"View Metabolomics workbench",typeName:"bio.metabolite.MW.name",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){linkouts.openUrl("https://www.metabolomicsworkbench.org/search/sitesearch.php?Name="+a[0],"Metabolomics Workbench")}},{menuEntry:"View PubChem",typeName:"bio.compound.pubchem",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No pubchemID available for this metabolite."):linkouts.openUrl("https://pubchem.ncbi.nlm.nih.gov/compound/"+
a,"PubChem")}},{menuEntry:"View RefMet",typeName:"bio.metabolite.refmet",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){linkouts.openUrl("https://www.metabolomicsworkbench.org/search/sitesearch.php?Name="+a[0],"Refmet")}},{menuEntry:"View Regno",typeName:"bio.metabolite.MW.regno",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No RegNo available for this metabolite"):linkouts.openUrl("https://www.metabolomicsworkbench.org/data/StructureData.php?RegNo="+a,"Regno")}},
{menuEntry:"View HMDB",typeName:"bio.metabolite.hmdb",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No HMDB ID available for this metabolite"):linkouts.openUrl("https://hmdb.ca/metabolites/"+a,"HMDB")}},{menuEntry:"View KEGG",typeName:"bio.compound.kegg",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No KEGG ID available for this metabolite."):linkouts.openUrl("https://www.genome.jp/dbget-bin/www_bget?compound+"+a,"KEGG")}},{menuEntry:"View ChEBI",
typeName:"bio.compound.chebi",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No ChEBI name available for this metabolite."):linkouts.openUrl("https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:"+a,"CheBI")}},{menuEntry:"View MetaCyc",typeName:"bio.compound.metacyc",selectMode:linkouts.SINGLE_SELECT,linkoutFn:function(a){a=a[0];""==a?alert("No MetaCyc name available for this metabolite."):linkouts.openUrl("https://metacyc.org/compound?orgid=META&id="+a,"Metacyc")}}]})})(linkouts);
(function(a){a.addPlugin({name:"NCBI",description:"Adds linkouts to resources provided by the NCBI.",version:"0.1.0",site:"https://www.ncbi.nlm.nih.gov/",logo:"https://www.ncbi.nlm.nih.gov/portal/portal3rc.fcgi/4013172/img/3242381",linkouts:[{menuEntry:"View NCBI ClinVar",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/clinvar/?term="+b[0]+"%5Bgene%5D","ClinVar")}},{menuEntry:"View NCBI Gene",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,
linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||"Homo_sapiens";a.openUrl("https://www.ncbi.nlm.nih.gov/gene?term=("+c+"%5BOrganism%5D)%20AND%20"+b+"%5BGene%20Name%5D","NCBI")}},{menuEntry:"View NCBI Entrez ID",typeName:"bio.gene.entrezid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/gene/"+b[0],"NCBI")}},{menuEntry:"Search NCBI Databases",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||
"Homo_sapiens";a.openUrl("https://www.ncbi.nlm.nih.gov/gquery/?term=(("+b+"%5BGene+Symbol%5D)+AND+"+c+"%5BOrganism%5D)","NCBI",{noframe:!0})}},{menuEntry:"Search ClinicalTrials.gov",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://clinicaltrials.gov/ct2/results?term="+b[0]+"&Search=Search","ClinicalTrials")}},{menuEntry:"Search ClinicalTrials.gov for all",typeName:"bio.gene.hugo",selectMode:a.MULTI_SELECT,linkoutFn:function(b){b=b.join("+AND+");a.openUrl("https://clinicaltrials.gov/ct2/results?term="+
b+"&Search=Search","ClinicalTrials")}},{menuEntry:"View GEO Accession",typeName:"bio.geo.acc",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc="+b[0],"NCBI")}}]})})(linkouts);
(function(a){function b(c){a.openUrl("https://iquery.ndexbio.org?genes="+c.join(","),"NDEx IQuery")}a.addPlugin({name:"NDEx IQuery",description:"Adds linkouts to NDEx IQuery.",version:"0.1.1",site:"https://iquery.ndexbio.org/",logo:"https://iquery.ndexbio.org/static/media/ndex-logo.04d7bf44.svg",linkouts:[{menuEntry:"NDEx IQuery Single",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:b},{menuEntry:"NDEx IQuery",typeName:"bio.gene.hugo",selectMode:a.MULTI_SELECT,linkoutFn:b}],matrixLinkouts:[{menuEntry:"NDEx IQuery",
typeName1:["bio.gene.hugo"],typeName2:["bio.gene.hugo"],selectMode:a.MULTI_SELECT,linkoutFn:function(c){b(c.Row.concat(c.Column).filter((d,e,f)=>f.indexOf(d)===e))}}]})})(linkouts);
(function(a){a.addPlugin({name:"OLSVis",description:"Adds linkouts to OLSVis ontolofy lookup service.",version:"0.1.0",site:"https://ols.wordvis.com/",logo:"https://ols.wordvis.com/images/olsvis_logo.png",linkouts:[{menuEntry:"View OLSVis",typeName:"bio.go",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("http://ols.wordvis.com/q="+b[0],"Genoontology")}}]})})(linkouts);
(function(a){a.describeTypes([{typeName:"bio.mdacc.pathwayid",displayName:"PathwaysWeb pathway identifier",description:"A Pathway Id as defined by the MD Anderson PathwaysWeb System"}]);a.addPlugin({name:"Pathways Browser",description:"Adds linkouts to the MD Anderson Pathways Browser.",version:"0.1.0",site:"https://bioinformatics.mdanderson.org/PathwaysBrowser/",logo:"https://bioinformatics.mdanderson.org//PathwaysBrowser/mda_logo.png",linkouts:[{menuEntry:"View PathwaysBrowser",typeName:"bio.go",
selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://bioinformatics.mdanderson.org/PathwaysBrowser/goTerm/latest/goId/"+b[0],"Geneontology")}},{menuEntry:"View Pathway",typeName:"bio.mdacc.pathwayid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://bioinformatics.mdanderson.org/PathwaysBrowser/pathway/latest/mdaPathwayId/"+b[0],"Pathways")}}]})})(linkouts);
(function(a){a.addPlugin({name:"PeptideAtlas",description:"Adds linkouts to PeptideAtlas.",version:"0.1.1",site:"http://www.peptideatlas.org/",logo:"https://db.systemsbiology.net/sbeams/images/PeptideAtlas_Logo.png",linkouts:[{menuEntry:"View PeptideAtlas",typeName:"bio.protein.uniprotid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://db.systemsbiology.net/sbeams/cgi/PeptideAtlas/Search?action=GO&search_key="+b[0],"PeptideAtlas")}}]})})(linkouts);
(function(a){a.addPlugin({name:"PubMed",description:"Adds linkouts to the PubMed portal.",version:"0.1.4",site:"https://www.ncbi.nlm.nih.gov/pubmed/",logo:"https://www.ncbi.nlm.nih.gov/coreutils/img/pubmed256blue.png",linkouts:[{menuEntry:"Search PubMed",typeName:"bio.pubmed",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/pubmed/?term="+b[0],"PubMed",{noframe:!0})}},{menuEntry:"Search PubMed for All",typeName:"bio.pubmed",selectMode:a.MULTI_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/pubmed/?term="+
b.join("+AND+"),"PubMed",{noframe:!0})}},{menuEntry:"Search PubMed for Any",typeName:"bio.pubmed",selectMode:a.MULTI_SELECT,linkoutFn:function(b){a.openUrl("https://www.ncbi.nlm.nih.gov/pubmed/?term="+b.join("+OR+"),"PubMed",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"QuickGO",description:"Adds linkouts to QuickGO gene ontology browser.",version:"0.1.0",site:"https://www.ebi.ac.uk/QuickGO/",logo:"https://www.ebi.ac.uk/QuickGO/images/quickgo-logo3.622656dc.png",linkouts:[{menuEntry:"View QuickGO",typeName:"bio.go",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.ebi.ac.uk/QuickGO/GTerm?id="+b[0],"Genoontology")}}]})})(linkouts);
(function(a){a.addPlugin({name:"RRID",description:"Antibody RRID.",version:"0.1.4",site:"https://antibodyregistry.org/",logo:"https://scicrunch.org/upload/community-components/resources_66006.png",linkouts:[{menuEntry:"Search Antibody Registry",typeName:"bio.rrid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://antibodyregistry.org/search.php?q="+b[0])}},{menuEntry:"Search SCICrunch for ",typeName:"bio.rrid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://scicrunch.org/resources/Antibodies/search?q="+
b[0]+"&l="+b[0])}}]})})(linkouts);
(function(a){a.describeTypes([{typeName:"bio.tcga.barcode.sample",displayName:"TCGA sample barcode",description:"First 15 characters of TCGA aliquot barcode"},{typeName:"bio.tcga.barcode.sample.vial.portion.analyte.aliquot",displayName:"TCGA aliquot barcode",description:"Full 28 character TCGA aliquot barcode"},{typeName:"bio.tcga.barcode.sample.vial.portion.analyte",displayName:"TCGA analyte barcode",description:"First 20 characters of a TCGA aliquot barcode"},{typeName:"bio.tcga.barcode.sample.vial.portion",displayName:"TCGA portion barcode",
description:"First 19 characters of TCGA aliquot barcode"},{typeName:"bio.tcga.barcode.sample.vial",displayName:"TCGA vial barcode",description:"First 16 characters of TCGA aliquot barcode"}]);a.addPlugin({name:"TCGA",logo:"https://www.cancer.gov/sites/g/files/xnrzdm211/files/styles/cgov_social_media/public/cgov_image/media_image/100/000/3/files/TCGA%20topic%20-%20feature%20card.png",site:"https://cancergenome.nih.gov/",description:"Enhances linkouts to The Cancer Genome Atlas.",version:"0.1.0",expandLinkOuts:function(){const b=
"bio tcga barcode sample vial portion analyte aliquot".split(" ");for(var c=4;c<b.length;c++)for(var d=b.slice(0,c).join("."),e=c+1;e<=b.length;e++){var f=b.slice(0,e).join(".");a.addSubtype(f,d)}}})})(linkouts);
(function(a){a.addPlugin({name:"TumorPortal",description:"Adds linkouts to TumorPortal",version:"0.1.0",site:"http://www.tumorportal.org/",linkouts:[{menuEntry:"View Tumor Portal",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("http://www.tumorportal.org/view?geneSymbol="+b[0],"TumorPortal",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"UCSC Genome Browser",description:"Adds linkouts to UCSC Genome Browser.",version:"0.1.2",site:"https://genome.ucsc.edu/",logo:"https://genome.ucsc.edu/images/newBlueHelix3.jpg",linkouts:[{menuEntry:"View UCSC Genome Browser",typeName:"bio.genome.position",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){const c=a.getAttribute("bio.ucsc.browser.db")||"hg38";a.openUrl("https://genome.ucsc.edu/cgi-bin/hgTracks?position="+b[0]+("&db="+c),"UCSC",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"UniProt",description:"Adds linkouts to UniProt protein database.",version:"0.1.1",site:"https://www.uniprot.org/",linkouts:[{menuEntry:"View Uniprot",typeName:"bio.protein.uniprotid",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){a.openUrl("https://www.uniprot.org/uniprot/"+b[0],"Uniprot",{noframe:!0})}}]})})(linkouts);
(function(a){a.addPlugin({name:"Vega",description:"Adds linkouts to Vega.",version:"0.1.1",site:"http://vega.sanger.ac.uk/",logo:"https://vega.archive.ensembl.org/i/vega.gif",linkouts:[{menuEntry:"Search Vega",typeName:"bio.gene.hugo",selectMode:a.SINGLE_SELECT,linkoutFn:function(b){b=b[0];const c=a.getAttribute("bio.species")||"Homo_sapiens";a.openUrl("http://vega.sanger.ac.uk/"+c+"/psychic?site=vega&q="+b,"Vega")}}]})})(linkouts);
