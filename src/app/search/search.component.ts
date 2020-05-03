import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
   @Output() stateEmit = new EventEmitter();
   @Output() zoneEmit = new EventEmitter();
   @Output() districtEmit = new EventEmitter();
   @Output() change = new EventEmitter();

  stateSelect:string = '';
  stateArr;
  districtSelect = [];
  zoneSelect = "";



  regionData = {  
    "states":[  
       {  
          "state":"Andhra Pradesh",
          "Andhra Pradesh":[  
             "Anantapur_orange",
             "Chittoor_red",
             "East Godavari_orange",
             "Guntur_red",
             "Krishna_red",
             "Kurnool_red",
             "Nellore_red",
             "Prakasam_orange",
             "Srikakulam_orange",
             "Visakhapatnam_orange",
             "Vizianagaram_green",
             "West Godavari_orange",
             "YSR Kadapa_orange"
          ]
       },
       {  
          "state":"Arunachal Pradesh",
          "Arunachal Pradesh":[  
             "Tawang",
             "West Kameng",
             "East Kameng",
             "Papum Pare",
             "Kurung Kumey",
             "Kra Daadi",
             "Lower Subansiri",
             "Upper Subansiri",
             "West Siang",
             "East Siang",
             "Siang",
             "Upper Siang",
             "Lower Siang",
             "Lower Dibang Valley",
             "Dibang Valley",
             "Anjaw",
             "Lohit",
             "Namsai",
             "Changlang",
             "Tirap",
             "Longding"
          ]
       },
       {  
          "state":"Assam",
          "Assam":[  
             "Baksa",
             "Barpeta",
             "Biswanath",
             "Bongaigaon",
             "Cachar",
             "Charaideo",
             "Chirang",
             "Darrang",
             "Dhemaji",
             "Dhubri_orange",
             "Dibrugarh",
             "Goalpara_orange",
             "Golaghat_orange",
             "Hailakandi",
             "Hojai",
             "Jorhat",
             "Kamrup Metropolitan",
             "Kamrup",
             "Karbi Anglong",
             "Karimganj",
             "Kokrajhar",
             "Lakhimpur",
             "Majuli",
             "Morigaon",
             "Nagaon",
             "Nalbari",
             "Dima Hasao",
             "Sivasagar",
             "Sonitpur",
             "South Salmara-Mankachar",
             "Tinsukia",
             "Udalguri",
             "West Karbi Anglong"
          ]
       },
       {  
          "state":"Bihar",
          "Bihar":[  
             "Araria",
             "Arwal_orange",
             "Aurangabad_orange",
             "Banka_orange",
             "Begusarai_orange",
             "Bhagalpur_orange",
             "Bhojpur_orange",
             "Buxar_red",
             "Darbhanga_orange",
             "East Champaran (Motihari)",
             "Gaya_red",
             "Gopalganj_orange",
             "Jamui",
             "Jehanabad_orange",
             "Kaimur (Bhabua)_orange",
             "Katihar",
             "Khagaria",
             "Kishanganj",
             "Lakhisarai_orange",
             "Madhepura_orange",
             "Madhubani_orange",
             "Munger (Monghyr)_red",
             "Muzaffarpur",
             "Nalanda_orange",
             "Nawada_orange",
             "Patna_red",
             "Purnia (Purnea)_orange",
             "Rohtas_red",
             "Saharsa",
             "Samastipur",
             "Saran_orange",
             "Sheikhpura",
             "Sheohar",
             "Sitamarhi",
             "Siwan_orange",
             "Supaul",
             "Vaishali_orange",
             "West Champaran_orange"
          ]
       },
       {  
          "state":"Chandigarh (UT)",
          "Chandigarh (UT)":[  
             "Chandigarh_red"
          ]
       },
       {  
          "state":"Chhattisgarh",
          "Chhattisgarh":[  
             "Balod",
             "Baloda Bazar",
             "Balrampur_orange",
             "Bastar",
             "Bemetara",
             "Bijapur",
             "Bilaspur",
             "Dantewada (South Bastar)",
             "Dhamtari",
             "Durg",
             "Gariyaband",
             "Janjgir-Champa",
             "Jashpur",
             "Kabirdham (Kawardha)",
             "Kanker (North Bastar)",
             "Kondagaon",
             "Korba_orange",
             "Korea (Koriya)",
             "Mahasamund",
             "Mungeli",
             "Narayanpur",
             "Raigarh",
             "Raipur_red",
             "Rajnandgaon",
             "Sukma",
             "Surajpur  ",
             "Surguja"
          ]
       },
       {  
          "state":"Dadra and Nagar Haveli (UT)",
          "Dadra and Nagar Haveli (UT)":[  
             "Dadra & Nagar Haveli"
          ]
       },
       {  
          "state":"Daman and Diu (UT)",
          "Daman and Diu (UT)":[  
             "Daman",
             "Diu"
          ]
       },
       {  
          "state":"Delhi (NCT)",
          "Delhi (NCT)":[  
             "Central Delhi_red",
             "East Delhi_red",
             "New Delhi_red",
             "North Delhi_red",
             "North East  Delhi_red",
             "North West  Delhi_red",
             "Shahdara_red",
             "South Delhi_red",
             "South East Delhi_red",
             "South West  Delhi_red",
             "West Delhi_red"
          ]
       },
       {  
          "state":"Goa",
          "Goa":[  
             "North Goa",
             "South Goa"
          ]
       },
       {  
          "state":"Gujarat",
          "Gujarat":[  
             "Ahmedabad_red",
             "Amreli",
             "Anand_red",
             "Aravalli_red",
             "Banaskantha (Palanpur)_red",
             "Bharuch_orange",
             "Bhavnagar_red",
             "Botad_orange",
             "Chhota Udepur_orange",
             "Dahod_orange",
             "Dangs (Ahwa)_orange",
             "Devbhoomi Dwarka",
             "Gandhinagar_red",
             "Gir Somnath_orange",
             "Jamnagar_orange",
             "Junagadh",
             "Kachchh_orange",
             "Kheda (Nadiad)_orange",
             "Mahisagar_orange",
             "Mehsana_orange",
             "Morbi",
             "Narmada (Rajpipla)_orange",
             "Navsari_orange",
             "Panchmahal (Godhra)_red",
             "Patan_orange",
             "Porbandar",
             "Rajkot_orange",
             "Sabarkantha (Himmatnagar)_orange",
             "Surat_red",
             "Surendranagar_orange",
             "Tapi (Vyara)_orange",
             "Vadodara_red",
             "Valsad_orange"
          ]
       },
       {  
          "state":"Haryana",
          "Haryana":[  
             "Ambala_orange",
             "Bhiwani_orange",
             "Charkhi Dadri_orange",
             "Faridabad_red",
             "Fatehabad_orange",
             "Gurgaon_orange",
             "Hisar_orange",
             "Jhajjar_orange",
             "Jind_orange",
             "Kaithal_orange",
             "Karnal_orange",
             "Kurukshetra_orange",
             "Mahendragarh",
             "Mewat",
             "Palwal_orange",
             "Panchkula_orange",
             "Panipat_orange",
             "Rewari",
             "Rohtak_orange",
             "Sirsa_orange",
             "Sonipat_red",
             "Yamunanagar_orange"
          ]
       },
       {  
          "state":"Himachal Pradesh",
          "Himachal Pradesh":[  
             "Bilaspur",
             "Chamba_orange",
             "Hamirpur_orange",
             "Kangra_orange",
             "Kinnaur",
             "Kullu",
             "Lahaul &amp; Spiti",
             "Mandi",
             "Shimla",
             "Sirmaur (Sirmour)_orange",
             "Solan_orange",
             "Una_orange"
          ]
       },
       {  
          "state":"Jammu and Kashmir",
          "Jammu and Kashmir":[  
             "Anantnag_red",
             "Bandipore_red",
             "Baramulla_orange",
             "Budgam_orange",
             "Doda",
             "Ganderbal_orange",
             "Jammu_orange",
             "Kargil",
             "Kathua_orange",
             "Kishtwar",
             "Kulgam_orange",
             "Kupwara_orange",
             "Leh",
             "Poonch",
             "Pulwama",
             "Rajouri_orange",
             "Ramban_orange",
             "Reasi_orange",
             "Samba_orange",
             "Shopian_red",
             "Srinagar_red",
             "Udhampur_orange"
          ]
       },
       {  
          "state":"Jharkhand",
          "Jharkhand":[  
             "Bokaro_orange",
             "Chatra",
             "Deoghar_orange",
             "Dhanbad_orange",
             "Dumka",
             "East Singhbhum",
             "Garhwa_orange",
             "Giridih_orange",
             "Godda",
             "Gumla",
             "Hazaribag_orange",
             "Jamtara_orange",
             "Khunti",
             "Koderma_orange",
             "Latehar",
             "Lohardaga",
             "Pakur",
             "Palamu",
             "Ramgarh",
             "Ranchi_red",
             "Sahibganj",
             "Seraikela-Kharsawan",
             "Simdega_orange",
             "West Singhbhum"
          ]
       },
       {  
          "state":"Karnataka",
          "Karnataka":[  
             "Bagalkot_orange",
             "Ballari_orange",
             "Belagavi_orange",
             "Bengaluru_red",
             "Bidar_orange",
             "Chamarajanagar",
             "Chikballapur_orange",
             "Chikkamagaluru",
             "Chitradurga",
             "Dakshina Kannada_orange",
             "Davangere",
             "Dharwad_orange",
             "Gadag_orange",
             "Hassan",
             "Haveri",
             "Kalaburagi_orange",
             "Kodagu",
             "Kolar",
             "Koppal",
             "Mandya_orange",
             "Mysuru_red",
             "Raichur",
             "Ramanagara",
             "Shivamogga",
             "Tumakuru_orange",
             "Udupi",
             "Karwar",
             "Bijapur",
             "Yadgir"
          ]
       },
       {  
          "state":"Kerala",
          "Kerala":[  
             "Alappuzha_orange",
             "Ernakulam",
             "Idukki_orange",
             "Kannur_red",
             "Kasaragod_orange",
             "Kollam_orange",
             "Kottayam_red",
             "Kozhikode_orange",
             "Malappuram_orange",
             "Palakkad_orange",
             "Pathanamthitta_orange",
             "Thiruvananthapuram_orange",
             "Thrissur_orange",
             "Wayanad"
          ]
       },
       {  
          "state":"Lakshadweep (UT)",
          "Lakshadweep (UT)":[  
             "Agatti",
             "Amini",
             "Androth",
             "Bithra",
             "Chethlath",
             "Kavaratti",
             "Kadmath",
             "Kalpeni",
             "Kilthan",
             "Minicoy"
          ]
       },
       {  
          "state":"Madhya Pradesh",
          "Madhya Pradesh":[  
             "Agar Malwa_orange",
             "Alirajpur_orange",
             "Anuppur",
             "Ashoknagar",
             "Balaghat",
             "Barwani_red",
             "Betul_orange",
             "Bhind",
             "Bhopal_red",
             "Burhanpur_orange",
             "Chhatarpur",
             "Chhindwara_orange",
             "Damoh",
             "Datia",
             "Dewas_red",
             "Dhar_red",
             "Dindori_orange",
             "Guna",
             "Gwalior_red",
             "Harda_orange",
             "Hoshangabad_orange",
             "Indore_red",
             "Jabalpur_red",
             "Jhabua",
             "Katni",
             "Khandwa",
             "Khargone_orange",
             "Mandla",
             "Mandsaur_orange",
             "Morena_orange",
             "Narsinghpur",
             "Neemuch",
             "Panna",
             "Raisen_orange",
             "Rajgarh",
             "Ratlam_orange",
             "Rewa",
             "Sagar_orange",
             "Satna",
             "Sehore",
             "Seoni",
             "Shahdol_orange",
             "Shajapur_orange",
             "Sheopur",
             "Shivpuri",
             "Sidhi",
             "Singrauli",
             "Tikamgarh_orange",
             "Ujjain_red",
             "Umaria",
             "Vidisha_orange"
          ]
       },
       {  
          "state":"Maharashtra",
          "Maharashtra":[  
             "Ahmednagar_orange",
             "Akola_red",
             "Amravati_orange",
             "Aurangabad_red",
             "Beed_orange",
             "Bhandara_orange",
             "Buldhana_orange",
             "Chandrapur_orange",
             "Dhule_red",
             "Gadchiroli",
             "Gondia",
             "Hingoli_orange",
             "Jalgaon_red",
             "Jalna_orange",
             "Kolhapur_orange",
             "Latur_orange",
             "Mumbai_red",
             "Mumbai Suburban_red",
             "Nagpur_red",
             "Nanded_orange",
             "Nandurbar_orange",
             "Nashik_red",
             "Osmanabad",
             "Palghar_red",
             "Parbhani_orange",
             "Pune_red",
             "Raigad_orange",
             "Ratnagiri_orange",
             "Sangli_orange",
             "Satara_red",
             "Sindhudurg",
             "Solapur_red",
             "Thane_red",
             "Wardha",
             "Washim",
             "Yavatmal_red"
          ]
       },
       {  
          "state":"Manipur",
          "Manipur":[  
             "Bishnupur",
             "Chandel",
             "Churachandpur",
             "Imphal East",
             "Imphal West",
             "Jiribam",
             "Kakching",
             "Kamjong",
             "Kangpokpi",
             "Noney",
             "Pherzawl",
             "Senapati",
             "Tamenglong",
             "Tengnoupal",
             "Thoubal",
             "Ukhrul"
          ]
       },
       {  
          "state":"Meghalaya",
          "Meghalaya":[  
             "East Garo Hills",
             "East Jaintia Hills",
             "East Khasi Hills_orange",
             "North Garo Hills",
             "Ri Bhoi",
             "South Garo Hills",
             "South West Garo Hills ",
             "South West Khasi Hills",
             "West Garo Hills",
             "West Jaintia Hills",
             "West Khasi Hills"
          ]
       },
       {  
          "state":"Mizoram",
          "Mizoram":[  
             "Aizawl",
             "Champhai",
             "Kolasib",
             "Lawngtlai",
             "Lunglei",
             "Mamit",
             "Saiha",
             "Serchhip"
          ]
       },
       {  
          "state":"Nagaland",
          "Nagaland":[  
             "Dimapur",
             "Kiphire",
             "Kohima",
             "Longleng",
             "Mokokchung",
             "Mon",
             "Peren",
             "Phek",
             "Tuensang",
             "Wokha",
             "Zunheboto"
          ]
       },
       {  
          "state":"Odisha",
          "Odisha":[  
             "Angul",
             "Balangir",
             "Balasore_red",
             "Bargarh",
             "Bhadrak_red",
             "Boudh",
             "Cuttack",
             "Deogarh",
             "Dhenkanal_orange",
             "Gajapati",
             "Ganjam",
             "Jagatsinghapur",
             "Jajpur_red",
             "Jharsuguda",
             "Kalahandi_orange",
             "Kandhamal",
             "Kendrapara_orange",
             "Kendujhar (Keonjhar)",
             "Khordha_orange",
             "Koraput_orange",
             "Malkangiri",
             "Mayurbhanj",
             "Nabarangpur",
             "Nayagarh",
             "Nuapada",
             "Puri",
             "Rayagada",
             "Sambalpur",
             "Sonepur",
             "Sundargarh_orange"
          ]
       },
       {  
          "state":"Puducherry (UT)",
          "Puducherry (UT)":[  
             "Karaikal",
             "Mahe",
             "Pondicherry_orange",
             "Yanam"
          ]
       },
       {  
          "state":"Punjab",
          "Punjab":[  
             "Amritsar_orange",
             "Barnala_orange",
             "Bathinda",
             "Faridkot_orange",
             "Fatehgarh Sahib",
             "Fazilka",
             "Ferozepur_orange",
             "Gurdaspur_orange",
             "Hoshiarpur_orange",
             "Jalandhar_red",
             "Kapurthala_orange",
             "Ludhiana_red",
             "Mansa_orange",
             "Moga_orange",
             "Muktsar_orange",
             "Nawanshahr (Shahid Bhagat Singh Nagar)_orange",
             "Pathankot_orange",
             "Patiala_red",
             "Rupnagar",
             "Sahibzada Ajit Singh Nagar (Mohali)_orange",
             "Sangrur_orange",
             "Tarn Taran_orange"
          ]
       },
       {  
          "state":"Rajasthan",
          "Rajasthan":[  
             "Ajmer_red",
             "Alwar_orange",
             "Banswara_red",
             "Baran",
             "Barmer_orange",
             "Bharatpur_red",
             "Bhilwara_orange",
             "Bikaner_orange",
             "Bundi",
             "Chittorgarh_orange",
             "Churu_orange",
             "Dausa_orange",
             "Dholpur_orange",
             "Dungarpur",
             "Hanumangarh_orange",
             "Jaipur_red",
             "Jaisalmer_orange",
             "Jalore",
             "Jhalawar_red",
             "Jhunjhunu_orange",
             "Jodhpur_red",
             "Karauli_orange",
             "Kota_red",
             "Nagaur_red",
             "Pali_orange",
             "Pratapgarh",
             "Rajsamand_orange",
             "Sawai Madhopur_orange",
             "Sikar_orange",
             "Sirohi",
             "Sri Ganganagar",
             "Tonk_orange",
             "Udaipur_orange"
          ]
       },
       {  
          "state":"Sikkim",
          "Sikkim":[  
             "East Sikkim",
             "North Sikkim",
             "South Sikkim",
             "West Sikkim"
          ]
       },
       {  
          "state":"Tamil Nadu",
          "Tamil Nadu":[  
             "Ariyalur_orange",
             "Chennai_red",
             "Coimbatore_orange",
             "Cuddalore_orange",
             "Dharmapuri_orange",
             "Dindigul_orange",
             "Erode_orange",
             "Kanchipuram_red",
             "Kanyakumari_orange",
             "Karur_orange",
             "Krishnagiri",
             "Madurai_red",
             "Nagapattinam_orange",
             "Namakkal_red",
             "Nilgiris_orange",
             "Perambalur_orange",
             "Pudukkottai_orange",
             "Ramanathapuram_orange",
             "Ranipet_red",
             "Salem_orange",
             "Sivaganga_orange",
             "Thanjavur_red",
             "Theni_orange",
             "Thoothukudi (Tuticorin)_orange",
             "Tiruchirappalli_orange",
             "Tirunelveli_orange",
             "Tiruppur_red",
             "Tiruvallur_red",
             "Tiruvannamalai_orange",
             "Tiruvarur_red",
             "Vellore_red",
             "Viluppuram_orange",
             "Virudhunagar_red"
          ]
       },
       {  
          "state":"Telangana",
          "Telangana":[  
             "Adilabad_orange",
             "Bhadradri Kothagudem",
             "Hyderabad_red",
             "Jagtial_orange",
             "Jangaon_orange",
             "Jayashankar Bhoopalpally_orange",
             "Jogulamba Gadwal_orange",
             "Kamareddy_orange",
             "Karimnagar_orange",
             "Khammam_orange",
             "Komaram Bheem Asifabad_orange",
             "Mahabubabad",
             "Mahabubnagar_orange",
             "Mancherial_orange",
             "Medak_orange",
             "Medchal_red",
             "Nagarkurnool",
             "Nalgonda_orange",
             "Nirmal_orange",
             "Nizamabad_orange",
             "Peddapalli_orange",
             "Rajanna Sircilla_orange",
             "Rangareddy_red",
             "Sangareddy_orange",
             "Siddipet",
             "Suryapet_red",
             "Vikarabad_red",
             "Wanaparthy",
             "Warangal (Rural)",
             "Warangal (Urban)_red",
             "Yadadri Bhuvanagiri"
          ]
       },
       {  
          "state":"Tripura",
          "Tripura":[  
             "Dhalai",
             "Gomati_orange",
             "Khowai",
             "North Tripura_orange",
             "Sepahijala",
             "South Tripura",
             "Unakoti",
             "West Tripura"
          ]
       },
       {  
          "state":"Uttarakhand",
          "Uttarakhand":[  
             "Almora",
             "Bageshwar",
             "Chamoli",
             "Champawat",
             "Dehradun_orange",
             "Haridwar_red",
             "Nainital_orange",
             "Pauri Garhwal",
             "Pithoragarh",
             "Rudraprayag",
             "Tehri Garhwal",
             "Udham Singh Nagar",
             "Uttarkashi"
          ]
       },
       {  
          "state":"Uttar Pradesh",
          "Uttar Pradesh":[  
             "Agra_red",
             "Aligarh_red",
             "Allahabad_orange",
             "Ambedkar Nagar",
             "Amethi (Chatrapati Sahuji Mahraj Nagar)",
             "Amroha (J.P. Nagar)_red",
             "Auraiya_orange",
             "Azamgarh_orange",
             "Baghpat_orange",
             "Bahraich_orange",
             "Ballia",
             "Balrampur",
             "Banda_orange",
             "Barabanki_orange",
             "Bareilly_red",
             "Basti_orange",
             "Bhadohi_orange",
             "Bijnor_red",
             "Budaun_orange",
             "Bulandshahr_red",
             "Chandauli",
             "Chitrakoot",
             "Deoria",
             "Etah_orange",
             "Etawah_orange",
             "Faizabad",
             "Farrukhabad",
             "Fatehpur",
             "Firozabad_red",
             "Gautam Buddha Nagar",
             "Ghaziabad_orange",
             "Ghazipur_orange",
             "Gonda_orange",
             "Gorakhpur_orange",
             "Hamirpur",
             "Hapur (Panchsheel Nagar)_orange",
             "Hardoi_orange",
             "Hathras",
             "Jalaun_orange",
             "Jaunpur_orange",
             "Jhansi_orange",
             "Kannauj_orange",
             "Kanpur Dehat",
             "Kanpur Nagar_red",
             "Kanshiram Nagar (Kasganj)",
             "Kaushambi_orange",
             "Kushinagar (Padrauna)",
             "Lakhimpur - Kheri",
             "Lalitpur",
             "Lucknow_red",
             "Maharajganj",
             "Mahoba",
             "Mainpuri_orange",
             "Mathura_red",
             "Mau_orange",
             "Meerut_red",
             "Mirzapur_orange",
             "Moradabad_red",
             "Muzaffarnagar_red",
             "Pilibhit_orange",
             "Pratapgarh_orange",
             "RaeBareli_red",
             "Rampur_red",
             "Saharanpur_red",
             "Sambhal (Bhim Nagar)_orange",
             "Sant Kabir Nagar_red",
             "Shahjahanpur",
             "Shamali (Prabuddh Nagar)_orange",
             "Shravasti_orange",
             "Siddharth Nagar",
             "Sitapur_orange",
             "Sonbhadra",
             "Sultanpur_orange",
             "Unnao_orange",
             "Varanasi_red"
          ]
       },
       {  
          "state":"West Bengal",
          "West Bengal":[  
             "Alipurduar",
             "Bankura",
             "Birbhum",
             "Burdwan (Bardhaman)_orange",
             "Cooch Behar",
             "Dakshin Dinajpur (South Dinajpur)",
             "Darjeeling_red",
             "_orange",
             "Howrah_red",
             "Jalpaiguri_red",
             "Kalimpong_red",
             "Kolkata_red",
             "Malda_red",
             "Murshidabad_orange",
             "Nadia_orange",
             "North 24 Parganas_red",
             "Paschim Medinipur (West Medinipur)_red",
             "Purba Medinipur (East Medinipur)",
             "Purulia",
             "South 24 Parganas_red",
             "Uttar Dinajpur (North Dinajpur)"
          ]
       }
    ]
 }


  constructor() { }

  ngOnInit(): void {
  }


  getStateIndex(state:string){
    for (let index = 0; index < this.regionData.states.length; index++) {

      if(this.regionData.states[index]['state'] == state){
        return index;
      }
    }
  }

  

  setState(state:string){
    this.stateSelect = state;
    this.districtSelect = [];

   if(state != ""){
      let districtNameArray = this.regionData.states[this.getStateIndex(state)][this.stateSelect];
    
    for (let index = 0; index < districtNameArray.length; index++) {
         this.districtSelect.push((districtNameArray[index]).split("_")[0]);
    }
    
   }else{
      this.stateEmit.emit("");
      this.districtEmit.emit("");
      this.change.emit(false);
   }
    
  
  }

  setZone(district:string,state:string){
   let districtNameArray = this.regionData.states[this.getStateIndex(state)][this.stateSelect];
     for (let index = 0; index < districtNameArray.length; index++) {
         if(district.toLowerCase() == districtNameArray[index].split("_")[0].toLowerCase() ){
            this.zoneSelect = districtNameArray[index].split("_")[1];
         }
        
     }
  }

  setDistrict(district:string){  
    this.stateEmit.emit(this.stateSelect);
    this.districtEmit.emit(district);
    this.change.emit(false);
    this.setZone(district,this.stateSelect);
    this.zoneEmit.emit(this.zoneSelect);
  }

  getDistricts(){
    // console.log("Hello",this.districtSelect);
     if(this.districtSelect.length == 0){

      let distNameArr =this.regionData.states[0]["Andhra Pradesh"]

         distNameArr.forEach(element => {
            this.districtSelect.push(element);   
         });
         
     }else{
      return this.districtSelect;
     }
     
  }

}
