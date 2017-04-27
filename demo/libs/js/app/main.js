// Create Marker
function createMarker(lat, lng, title, alt, icon){
	var marker = L.marker([lng,lat], { title: title, alt: alt, icon: icon });
	return marker
}

// Add popUp to Layer
function addPopupLayer(popUpContent, layer){
	var customOptions = {
    	'className' : 'custom-popup'
    };
	layer.bindPopup(popUpContent, customOptions);
}

// Create Icon
function createIcon(iconUrl, iconSize, popupAnchor){
	var icon = L.icon({
		iconUrl: iconUrl,
	 	iconSize: iconSize, // size of the icon
	  	popupAnchor: popupAnchor
	});
	return icon;
}

// Create DivIcon
function createDivIcon(html, className, iconSize){
	var divIcon = L.divIcon({ 
		html: html, //html content inside cluster
		className: className, //className for cluster container
		iconSize: iconSize //size for cluster container
	});
	return divIcon;
}

// Create markerClusterGroup
function createmarkerClusterGroup(clusterCfg){
	var markers = L.markerClusterGroup(clusterCfg);
	return markers;
}

// Add marker to cluster
function addMarkerCluster(markerClusterGroup, marker){
	return markerClusterGroup.addLayer(marker);
}

//Add Layer to Map
function addLayerToMap(map, layer){
	return map.addLayer(layer);
}

// Config Map
var options = {
	style              : "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
	center             : [19.5250561, -96.9084628],
	zoom               : 14,
	zoomControl        : true,
	holder             : 'map',
	maxZoom            : 23
};
options.layers = L.tileLayer( options.style, {
	attribution  : 'Mapatón Ciudadano Xalapa, 2016',
});


// Create Map 
var map = L.map( options.holder, options );

//Scroll para lista
$('#scroll-panel').enscroll({
  showOnHover: false,
  verticalTrackClass: 'barra-scroll',
  verticalHandleClass: 'barra-manejadora'
});

//Show panel
$( ".open-close" ).click(function() {
	$(".open-close").toggleClass('active');
	$('#cbp-spmenu-s2').toggleClass('container-avisos-comunicados-mostrar');
	$('.timeline-avisoscomunicados').css('display', 'block');  
});

//Close panel
$(".cerrar-panel").click(function() {
	$(".open-close").toggleClass('active');
	$('#cbp-spmenu-s2').toggleClass('container-avisos-comunicados-mostrar');
	$('.timeline-avisoscomunicados').css('display', 'none'); 
});

//Show route
var route = "";
var idRoute = "";
var stops = "";

function selectRoute (idRoute)
{

	switch (idRoute){
	case "13922705":

		route = {
			"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:crs84"}},"features":[{"type":"Feature","properties":{"id":"13922705","name":"Ruta 10005","desc":"INICIO en la reserva territorial- 20 de noviembre- Economía- Avenida Xalapa","notes":"Inicio de la ruta distinta por pavimentación en la reserva territorial","peak_am":10,"midday":10,"peak_pm":10,"night":10},"geometry":{"type":"LineString","coordinates":[[-96.8760757446289,19.507482528686523],[-96.87594604492188,19.507850646972656],[-96.87535095214844,19.508214950561523],[-96.8726806640625,19.50872039794922],[-96.8725814819336,19.508909225463867],[-96.872802734375,19.50921058654785],[-96.87371826171875,19.508668899536133],[-96.87586212158203,19.5079402923584],[-96.87681579589844,19.506786346435547],[-96.87781524658203,19.50634002685547],[-96.8785629272461,19.506393432617188],[-96.8790054321289,19.506601333618164],[-96.87970733642578,19.507308959960938],[-96.88054656982422,19.50765037536621],[-96.88584899902344,19.506851196289062],[-96.88923645019531,19.506057739257812],[-96.89152526855469,19.505693435668945],[-96.89105224609375,19.504783630371094],[-96.89057159423828,19.504627227783203],[-96.89105987548828,19.504798889160156],[-96.89119720458984,19.505592346191406],[-96.89134979248047,19.505746841430664],[-96.89424896240234,19.505361557006836],[-96.89503479003906,19.505428314208984],[-96.8989486694336,19.506711959838867],[-96.90005493164062,19.508447647094727],[-96.9012222290039,19.509538650512695],[-96.90180206298828,19.510828018188477],[-96.90133666992188,19.512372970581055],[-96.90072631835938,19.513038635253906],[-96.90074920654297,19.513364791870117],[-96.90158081054688,19.51322364807129],[-96.90287780761719,19.51234245300293],[-96.90355682373047,19.512413024902344],[-96.9040756225586,19.513168334960938],[-96.90454864501953,19.513397216796875],[-96.90592193603516,19.51224136352539],[-96.90690612792969,19.513015747070312],[-96.90787506103516,19.513261795043945],[-96.91120910644531,19.51559066772461],[-96.91212463378906,19.51683235168457],[-96.91484832763672,19.51909637451172],[-96.91468811035156,19.519559860229492],[-96.9147720336914,19.519805908203125],[-96.91546630859375,19.51865005493164],[-96.91619110107422,19.517799377441406],[-96.91706848144531,19.51814079284668],[-96.9179916381836,19.519311904907227],[-96.91856384277344,19.52040672302246],[-96.91777801513672,19.52177619934082],[-96.9176254272461,19.52169418334961],[-96.91741943359375,19.522029876708984],[-96.91694641113281,19.522335052490234],[-96.9162368774414,19.523488998413086],[-96.91619873046875,19.52427864074707],[-96.91683197021484,19.52498435974121],[-96.9167251586914,19.525476455688477],[-96.91690826416016,19.526201248168945],[-96.91661834716797,19.527406692504883],[-96.91532897949219,19.529090881347656],[-96.91564178466797,19.52939796447754],[-96.91561889648438,19.531658172607422],[-96.91539764404297,19.532663345336914],[-96.91561126708984,19.532712936401367],[-96.91546630859375,19.532896041870117],[-96.91624450683594,19.533681869506836],[-96.91666412353516,19.535112380981445],[-96.91703033447266,19.53544044494629],[-96.91864776611328,19.53610610961914],[-96.918701171875,19.536256790161133],[-96.91946411132812,19.5363826751709],[-96.91996765136719,19.536663055419922],[-96.92097473144531,19.53663444519043],[-96.92357635498047,19.53704261779785],[-96.92422485351562,19.537843704223633],[-96.92420959472656,19.5380802154541],[-96.92491149902344,19.539052963256836],[-96.92486572265625,19.539216995239258],[-96.9251937866211,19.53937339782715],[-96.9253921508789,19.540000915527344],[-96.9270248413086,19.542509078979492],[-96.92699432373047,19.54326057434082],[-96.92766571044922,19.544193267822266],[-96.92794036865234,19.54585075378418],[-96.92921447753906,19.54792594909668],[-96.92965698242188,19.54964256286621],[-96.9296646118164,19.550739288330078],[-96.92891693115234,19.55475616455078]]}}]
		};

	break;
	
	case "13923205":

		route = {
			"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:crs84"}},"features":[{"type":"Feature","properties":{"id":"13923205","name":"Ruta 10007","desc":"INICIO en la Escuela Normal Veracruzana -Avenida Xalapa, Economía, Clavijero, Reserva Territorial","notes":null,"peak_am":10,"midday":10,"peak_pm":10,"night":10},"geometry":{"type":"LineString","coordinates":[[-96.9290542602539,19.55449104309082],[-96.92974853515625,19.551645278930664],[-96.92970275878906,19.551149368286133],[-96.93001556396484,19.54935646057129],[-96.92976379394531,19.548534393310547],[-96.92887878417969,19.54710578918457],[-96.92843627929688,19.546689987182617],[-96.9280014038086,19.545351028442383],[-96.92765808105469,19.543516159057617],[-96.92671203613281,19.541711807250977],[-96.92623901367188,19.541181564331055],[-96.9261474609375,19.54055404663086],[-96.925537109375,19.54022979736328],[-96.92498779296875,19.539356231689453],[-96.92494201660156,19.538461685180664],[-96.9245376586914,19.537662506103516],[-96.92459106445312,19.533283233642578],[-96.9244155883789,19.53260040283203],[-96.9244384765625,19.531904220581055],[-96.92462921142578,19.531538009643555],[-96.9244384765625,19.531312942504883],[-96.92461395263672,19.528240203857422],[-96.92440795898438,19.52765464782715],[-96.92444610595703,19.526905059814453],[-96.92278289794922,19.526708602905273],[-96.92265319824219,19.52701759338379],[-96.92288970947266,19.526813507080078],[-96.92243957519531,19.5264835357666],[-96.92205047607422,19.526676177978516],[-96.9214859008789,19.526493072509766],[-96.92124938964844,19.526636123657227],[-96.92108154296875,19.526554107666016],[-96.92105102539062,19.52623748779297],[-96.92034912109375,19.52641487121582],[-96.91937255859375,19.52515411376953],[-96.91861724853516,19.524539947509766],[-96.91776275634766,19.52326202392578],[-96.91703033447266,19.522764205932617],[-96.91597747802734,19.521240234375],[-96.91505432128906,19.519304275512695],[-96.91023254394531,19.514766693115234],[-96.90582275390625,19.51215362548828],[-96.9051742553711,19.512958526611328],[-96.904541015625,19.51331329345703],[-96.90409851074219,19.513309478759766],[-96.90386199951172,19.512521743774414],[-96.90312957763672,19.512310028076172],[-96.90265655517578,19.51245880126953],[-96.90221405029297,19.51295280456543],[-96.90165710449219,19.51326560974121],[-96.90089416503906,19.513437271118164],[-96.90064239501953,19.513050079345703],[-96.90129852294922,19.512287139892578],[-96.90167236328125,19.510971069335938],[-96.90082550048828,19.509252548217773],[-96.90038299560547,19.508859634399414],[-96.90037536621094,19.508546829223633],[-96.90060424804688,19.508277893066406],[-96.90184020996094,19.50882339477539],[-96.90200805664062,19.508670806884766],[-96.90117645263672,19.50796127319336],[-96.89888763427734,19.5065860748291],[-96.89678192138672,19.505788803100586],[-96.8946762084961,19.505229949951172],[-96.893798828125,19.50515365600586],[-96.89215850830078,19.505516052246094],[-96.89120483398438,19.5054988861084],[-96.89125061035156,19.504783630371094],[-96.89065551757812,19.504568099975586],[-96.89114379882812,19.505075454711914],[-96.89079284667969,19.505712509155273],[-96.88812255859375,19.506290435791016],[-96.88032531738281,19.507511138916016],[-96.87976837158203,19.50716781616211],[-96.8790054321289,19.506309509277344],[-96.87884521484375,19.504520416259766],[-96.87791442871094,19.50320816040039],[-96.87786102294922,19.503385543823242],[-96.87816619873047,19.503372192382812],[-96.87882232666016,19.50444793701172],[-96.87885284423828,19.505573272705078],[-96.87877655029297,19.5057430267334],[-96.87734985351562,19.505861282348633],[-96.87676239013672,19.50617790222168],[-96.87583923339844,19.505409240722656],[-96.8755874633789,19.50564193725586],[-96.87569427490234,19.5057373046875],[-96.87553405761719,19.50567054748535],[-96.87493133544922,19.506166458129883],[-96.87358093261719,19.5048770904541],[-96.8727035522461,19.50452995300293],[-96.87125396728516,19.503374099731445],[-96.87065124511719,19.503305435180664],[-96.87062072753906,19.503171920776367]]}}]
		};

	break;

	}

	return route;
}

function selectStops (idRoute)
{

	switch (idRoute){
	case "13922705":

		stops = {
			"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"id":"13922706","routeId":"13922705","sequence":0,"travelTime":147616534,"dwellTime":5,"arrivalTim":0,"departureT":4,"passengerA":147616534,"passengerB":147616534,"location":"Arco Sur 109, Campo Nuevo, 91193 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.88585,19.506851]}},{"type":"Feature","properties":{"id":"13922708","routeId":"13922705","sequence":1,"travelTime":36,"dwellTime":4,"arrivalTim":0,"departureT":3,"passengerA":147616538,"passengerB":147616538,"location":"Arco Sur 109, Campo Nuevo, 91193 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.88689,19.50658]}},{"type":"Feature","properties":{"id":"13922710","routeId":"13922705","sequence":2,"travelTime":81,"dwellTime":7,"arrivalTim":1,"departureT":0,"passengerA":147616547,"passengerB":147616547,"location":"Arco Sur 102, Campo Nuevo, Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.89147,19.505657]}},{"type":"Feature","properties":{"id":"13922712","routeId":"13922705","sequence":3,"travelTime":176,"dwellTime":6,"arrivalTim":0,"departureT":1,"passengerA":147616565,"passengerB":147616565,"location":"Av. Enrique C. Rébsamen 2013, Nuevo Xalapa, 91097 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.89931,19.507154]}},{"type":"Feature","properties":{"id":"13922714","routeId":"13922705","sequence":4,"travelTime":145,"dwellTime":3,"arrivalTim":0,"departureT":1,"passengerA":147616580,"passengerB":147616580,"location":"Manantial de San Cristóbal, Xalapa 2000, 91097 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.90146,19.512062]}},{"type":"Feature","properties":{"id":"13922716","routeId":"13922705","sequence":5,"travelTime":215,"dwellTime":6,"arrivalTim":0,"departureT":0,"passengerA":147616602,"passengerB":147616602,"location":"Av. Enrique C. Rébsamen 276A, Martires de Chicago, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.906906,19.513016]}},{"type":"Feature","properties":{"id":"13922718","routeId":"13922705","sequence":6,"travelTime":177,"dwellTime":2,"arrivalTim":0,"departureT":0,"passengerA":147616620,"passengerB":147616620,"location":"Av. Enrique C. Rébsamen 112, Caminos, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.914185,19.518469]}},{"type":"Feature","properties":{"id":"13922720","routeId":"13922705","sequence":7,"travelTime":128,"dwellTime":20,"arrivalTim":4,"departureT":2,"passengerA":147616633,"passengerB":147616635,"location":"Universitario Gonzalo Aguirre Beltrán, Zona Universitaria, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.91619,19.5178]}},{"type":"Feature","properties":{"id":"13922722","routeId":"13922705","sequence":8,"travelTime":56,"dwellTime":5,"arrivalTim":0,"departureT":1,"passengerA":147616641,"passengerB":147616641,"location":"Universitario Gonzalo Aguirre Beltrán 430, Zona Universitaria, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.9178,19.519115]}},{"type":"Feature","properties":{"id":"13922724","routeId":"13922705","sequence":9,"travelTime":76,"dwellTime":8,"arrivalTim":1,"departureT":1,"passengerA":147616649,"passengerB":147616650,"location":"Calle Salvador Díaz Mirón 26, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.918205,19.52105]}},{"type":"Feature","properties":{"id":"13922726","routeId":"13922705","sequence":10,"travelTime":239,"dwellTime":2,"arrivalTim":1,"departureT":0,"passengerA":147616673,"passengerB":147616674,"location":"Calle Salvador Díaz Mirón 1, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.9162,19.524279]}}]
		};

	break;
	
	case "13923205":

		stops = {
			"type":"FeatureCollection","crs":{"type":"name","properties":{"name":"urn:ogc:def:crs:OGC:1.3:CRS84"}},"features":[{"type":"Feature","properties":{"id":"13923206","routeId":"13923205","sequence":0,"travelTime":147374319,"dwellTime":7,"arrivalTim":0,"departureT":1,"passengerA":147374319,"passengerB":147374319,"location":"Av. Xalapa 1116, Progreso Macuiltepetl, 91130 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92921,19.553923]}},{"type":"Feature","properties":{"id":"13923208","routeId":"13923205","sequence":1,"travelTime":22,"dwellTime":2,"arrivalTim":0,"departureT":1,"passengerA":147374321,"passengerB":147374322,"location":"Av. Xalapa 1116, Progreso Macuiltepetl, 91130 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.929245,19.553593]}},{"type":"Feature","properties":{"id":"13923210","routeId":"13923205","sequence":2,"travelTime":53,"dwellTime":17,"arrivalTim":0,"departureT":1,"passengerA":147374327,"passengerB":147374329,"location":"Av. Xalapa 1116, Progreso Macuiltepetl, 91130 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92961,19.551802]}},{"type":"Feature","properties":{"id":"13923212","routeId":"13923205","sequence":3,"travelTime":78,"dwellTime":14,"arrivalTim":0,"departureT":1,"passengerA":147374336,"passengerB":147374338,"location":"Av. Xalapa 179, Obrero Campesina, 91020 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92987,19.548794]}},{"type":"Feature","properties":{"id":"13923214","routeId":"13923205","sequence":4,"travelTime":27,"dwellTime":1,"arrivalTim":0,"departureT":1,"passengerA":147374341,"passengerB":147374341,"location":"Av. Xalapa 179, Obrero Campesina, 91020 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92987,19.548794]}},{"type":"Feature","properties":{"id":"13923216","routeId":"13923205","sequence":5,"travelTime":55,"dwellTime":7,"arrivalTim":1,"departureT":0,"passengerA":147374346,"passengerB":147374347,"location":"Av. Xalapa 602, Progreso Macuiltepetl, 91130 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92844,19.54669]}},{"type":"Feature","properties":{"id":"13923218","routeId":"13923205","sequence":6,"travelTime":12,"dwellTime":15,"arrivalTim":0,"departureT":3,"passengerA":147374348,"passengerB":147374350,"location":"Av. Xalapa 337, Obrero Campesina, 91020 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.928406,19.546476]}},{"type":"Feature","properties":{"id":"13923220","routeId":"13923205","sequence":7,"travelTime":101,"dwellTime":11,"arrivalTim":0,"departureT":2,"passengerA":147374360,"passengerB":147374361,"location":"Av. Xalapa 274, Aguacatal, 91130 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92735,19.54295]}},{"type":"Feature","properties":{"id":"13923222","routeId":"13923205","sequence":8,"travelTime":198,"dwellTime":14,"arrivalTim":0,"departureT":2,"passengerA":147374381,"passengerB":147374382,"location":"Francisco Javier Clavijero 192A, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.9247,19.53778]}},{"type":"Feature","properties":{"id":"13923224","routeId":"13923205","sequence":9,"travelTime":114,"dwellTime":6,"arrivalTim":1,"departureT":0,"passengerA":147374393,"passengerB":147374394,"location":"Francisco Javier Clavijero 141, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.924576,19.533884]}},{"type":"Feature","properties":{"id":"13923226","routeId":"13923205","sequence":10,"travelTime":95,"dwellTime":10,"arrivalTim":1,"departureT":1,"passengerA":147374403,"passengerB":147374404,"location":"Francisco Javier Clavijero 71a, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92454,19.531662]}},{"type":"Feature","properties":{"id":"13923228","routeId":"13923205","sequence":11,"travelTime":14,"dwellTime":68,"arrivalTim":0,"departureT":8,"passengerA":147374406,"passengerB":147374413,"location":"Francisco Javier Clavijero 69, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92458,19.53154]}},{"type":"Feature","properties":{"id":"13923230","routeId":"13923205","sequence":12,"travelTime":196,"dwellTime":110,"arrivalTim":3,"departureT":7,"passengerA":147374432,"passengerB":147374443,"location":"Francisco Javier Clavijero 5, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92452,19.527811]}},{"type":"Feature","properties":{"id":"13923232","routeId":"13923205","sequence":13,"travelTime":157,"dwellTime":7,"arrivalTim":0,"departureT":1,"passengerA":147374459,"passengerB":147374460,"location":"Francisco Javier Clavijero 4, Zona Centro, Centro, 91000 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.92441,19.527498]}},{"type":"Feature","properties":{"id":"13923234","routeId":"13923205","sequence":14,"travelTime":1031,"dwellTime":13,"arrivalTim":2,"departureT":1,"passengerA":147374563,"passengerB":147374564,"location":"Enrique C Rébsamen 16B, Obreros Textiles, 91060 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.91623,19.521532]}},{"type":"Feature","properties":{"id":"13923236","routeId":"13923205","sequence":15,"travelTime":16,"dwellTime":6,"arrivalTim":0,"departureT":1,"passengerA":147374566,"passengerB":147374566,"location":"Enrique C Rébsamen 18, Obreros Textiles, 91060 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.91609,19.521381]}},{"type":"Feature","properties":{"id":"13923238","routeId":"13923205","sequence":16,"travelTime":142,"dwellTime":8,"arrivalTim":3,"departureT":0,"passengerA":147374580,"passengerB":147374581,"location":"Av. Enrique C. Rébsamen 138, Martires de Chicago, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.913445,19.517782]}},{"type":"Feature","properties":{"id":"13923240","routeId":"13923205","sequence":17,"travelTime":13,"dwellTime":0,"arrivalTim":1,"departureT":0,"passengerA":147374583,"passengerB":147374583,"location":"Av. Enrique C. Rébsamen 140, Bella Vista, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.913124,19.517557]}},{"type":"Feature","properties":{"id":"13923242","routeId":"13923205","sequence":18,"travelTime":173,"dwellTime":8,"arrivalTim":1,"departureT":0,"passengerA":147374600,"passengerB":147374601,"location":"Av. Enrique C. Rébsamen 2, Martires de Chicago, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.9068,19.512777]}},{"type":"Feature","properties":{"id":"13923244","routeId":"13923205","sequence":19,"travelTime":114,"dwellTime":6,"arrivalTim":1,"departureT":0,"passengerA":147374612,"passengerB":147374613,"location":"Manantial de San Cristóbal, Xalapa 2000, 91097 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.90399,19.51282]}},{"type":"Feature","properties":{"id":"13923246","routeId":"13923205","sequence":20,"travelTime":83,"dwellTime":9,"arrivalTim":2,"departureT":1,"passengerA":147374621,"passengerB":147374622,"location":"Manantial de San Cristóbal, Xalapa 2000, 91097 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.9013,19.512287]}},{"type":"Feature","properties":{"id":"13923248","routeId":"13923205","sequence":21,"travelTime":66,"dwellTime":5,"arrivalTim":1,"departureT":0,"passengerA":147374628,"passengerB":147374629,"location":"Blvrd San Cristóbal, Xalapa 2000, 91097 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.900826,19.509253]}},{"type":"Feature","properties":{"id":"13923250","routeId":"13923205","sequence":22,"travelTime":94,"dwellTime":7,"arrivalTim":1,"departureT":0,"passengerA":147374638,"passengerB":147374639,"location":"Av. Enrique C. Rébsamen 308, Martires de Chicago, 91090 Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.90129,19.508081]}},{"type":"Feature","properties":{"id":"13923252","routeId":"13923205","sequence":23,"travelTime":125,"dwellTime":7,"arrivalTim":2,"departureT":0,"passengerA":147374652,"passengerB":147374652,"location":"Av. Enrique C. Rébsamen, Campo Nuevo, Xalapa Enríquez, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.894196,19.5052]}},{"type":"Feature","properties":{"id":"13923254","routeId":"13923205","sequence":24,"travelTime":87,"dwellTime":14,"arrivalTim":3,"departureT":0,"passengerA":147374661,"passengerB":147374662,"location":"Cto. Loma Alta 14a, Nuevo Xalapa, Pacho Viejo, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.890724,19.504568]}},{"type":"Feature","properties":{"id":"13923256","routeId":"13923205","sequence":25,"travelTime":20,"dwellTime":8,"arrivalTim":0,"departureT":1,"passengerA":147374664,"passengerB":147374665,"location":"Cto. Loma Alta 14a, Nuevo Xalapa, Pacho Viejo, Ver., Mexico"},"geometry":{"type":"Point","coordinates":[-96.890656,19.504568]}}]
		};

	break;

	}

	return stops;
}

function onEachFeature(feature, layer) {
	console.log('feature ', feature);
	// does this feature have a property named popupContent?
	if (feature.properties) {
		
		var customOptions = {
    		'className' : 'custom-popup'
    	};
    	var popUpContent = "";
		var unit = feature.properties.id;
		var location = feature.properties.location;
		popUpContent += "<h5>Parada: #"+unit+"</h5>";
      	popUpContent += "<ul>";
      	popUpContent += "<li>Ubicación: "+location+"</li>";
      	popUpContent += "<li class='img'><img src='libs/images/stops/"+unit+".png'/></li>";
      	popUpContent += "</ul>";
		layer.bindPopup(popUpContent, customOptions);

		var icon, iconUrl, iconSize, popupAnchor;
		iconUrl = "libs/images/transit_stop_button.png";
		iconSize = [30, 30];
		popupAnchor = [0,-15];
		icon = createIcon(iconUrl, iconSize, popupAnchor);
		layer.setIcon(icon);
	}
}


$(".item-route").click(function (e) {

	// show loading
	$('.layer-map').addClass('show');

	var myStyle = {
    	"color": "#33c775",
    	"weight": 7,
	};

	idRoute = $(this).attr('id');

	console.log('id Route: ', idRoute);

	route = selectRoute(idRoute);

	console.log('route ', route);

	stops = selectStops(idRoute);

	//Clean Map
	map.eachLayer(function (layer) {
		console.log(layer);
    	map.removeLayer(layer);
	});

	options.layers = L.tileLayer( options.style, {
		attribution  : 'Mapatón Ciudadano Xalapa, 2016',
	});

	map.addLayer(options.layers);

	setTimeout(function()
	{
  		L.geoJson(route, {
	    	style: myStyle
		}).addTo(map);

		L.geoJson(stops,{
			onEachFeature: onEachFeature
		}).addTo(map);

  		//hide loading
		$('.layer-map').removeClass('show');

  	}, 2000);

	e.preventDefault();
});