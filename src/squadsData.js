const clerics = new Set(["HeartOfShadowZ", "KidAtomos", "Claramenta", "✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠", "Aeliah", "BetterDays", "ganjarule", "Talonwife", "Tamrood", "WhiteDove_", "Averelle", "Galaxy_Girl", "Lady_EverLuv", "Aenara"]);
const mystics = new Set(["Elonei", "Maryiam", "Natta", "Alivia", "Gly", "Siachi"]);
const blademasters = new Set(["slewdem", "grei", "SmashWolf", "DashRiprock", "DarkAlex"]);
const factionBase = {
  "iskiplegdays": "<@!277494364023029760>",
  "Rausky": "<@!1001184345333182556>",
  "WoodUToDeath": "<@!600054688544587777>",
  "Claramenta": "<@!285928215128702987>",
  "Elonei": "<@!243079884086181888>",
  "Natta": "<@!948001004585107496>",
  "✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠": "<@!218249414320455680>",
  "BetterDays/TerribleNights": "<@!165464369155670016>",
  "DisInfection": "<@!576336235249795086>",
  "DreamSeeker": "<@!247886642998673409>",
  "estan/luiz": "<@!599300052825014307>",
  "Ezratheus": "<@!309871528038891520>",
  "isabo": "<@!168787430202277889>",
  "IWHBYD": "<@!401221411328360458>",
  "kenichi": "<@!423640837398986783>",
  "LimitedEdition": "<@!119225070060044288>",
  "LollyPopKiss": "<@!750463736300699671>",
  "SANDYSXGAL": "<@!698608093789028473>",
  "StormKitty/CoolKitty": "<@!349096243030523904>",
  "Talonwife": "<@!531831455597330437>",
  "Tamrood": "<@!232748502109782017>",
  "AdversityK": "<@!978626493339037717>",
  "Aeliah": "<@!561717575302643753>",
  "Aemirah": "<@!236988398911488002>",
  "Aenara": "<@!419272203432099850>",
  "Alitah/Shivy": "<@!182358693290049537>",
  "AngioTensln": "<@!895120300998529025>",
  "Anori": "<@!209128825555124225>",
  "ArrowRev": "<@!578719382159753237>",
  "Averelle": "<@!335192674975875073>",
  "BulleT": "<@!533341572402511873>",
  "Clubber": "<@!358438425042485260>",
  "Darcytheus": "<@!639238273100939275>",
  "DashRiprock": "<@!216230206816518144>",
  "EvoPony": "<@!776035339709054998>",
  "FishyFret/Chayy": "<@!141699231449612288>",
  "Foxxeh": "<@!364826703312191488>",
  "Fyara": "<@!378951133831626752>",
  "ganjarule": "<@!165300929816559617>",
  "GILF": "<@!953822808058757170>",
  "Gly": "<@!561746486241656852>",
  "grei": "<@!518213288186871842>",
  "Icepaw/Exo": "<@!255217105417273345>",
  "iiFAKE": "<@!361146286516207616>",
  "IlaSeeker": "<@!359770851467591681>",
  "Julianmede": "<@!877728091332567050>",
  "KayZier": "<@!244140931844931587>",
  "Kimilina/HowlingPuppy": "<@!236834177251540992>",
  "krypto": "<@!726433066502979614>",
  "LastSplash": "<@!617146270280319037>",
  "lKygo": "<@!292122434058977280>",
  "lynshei": "<@!827733364928675850>",
  "Maryiam": "<@!287277598709383169>",
  "Methyd": "<@!733069962087759993>",
  "MORT/Ingrid": "<@!252307230957764619>",
  "nigelus": "<@!689646493497557037>",
  "Parley/DAVID": "<@!610357667650732073>",
  "Pepprina": "<@!358987296353026048>",
  "PIERCE": "<@!341756794592428042>",
  "Ranker": "<@!268090399522816010>",
  "RapaNui": "<@!625678092043812876>",
  "RedoX": "<@!366284752833216513>",
  "RogueMona": "<@!350467880896430082>",
  "Roryy": "<@!344325716046905358>",
  "Shuddemel": "<@!367239806318673921>",
  "Siachi": "<@!161614572623495168>",
  "slewdem": "<@!521401741208453130>",
  "SmashWolf": "<@!554761171798982677>",
  "Takoe": "<@!552620275443826719>",
  "Torleik": "<@!325771278973796353>",
  "WhiteDove_": "<@!654600360199192577>",
  "x_Adi_x": "<@!728766407688585288>",
  "xAnastasiax/ana": "<@!248979576422662155>",
  "Xaoziq": "<@!377172708896800769>",
  "Yinshen": "<@!320913968308944910>",
  "YSoooSeriious": "<@!612007061508849664>",
  "LunaRoja": "<@!1001193501444296734>",
  "Usama": "<@!490644146101682198>",
  "DarkAlex": "<@!955693989644877855>",
  "KidAtomos": "<@!162933136806641664>",
  "zacro": "<@!597230501278908426>",
  "skittIes": "<@!325378457846677525>",
  "HeartOfShadowZ" : "<@!574368312767545354>",
  "Corbin": "",
  "SomiJinJin": "",
  "Lady_EverLuv": "",
  "Cyphur": "",
  "Lifesaber": "",
  "AlphaWarrior": "",
  "Galaxy_Girl": "",
  "zoey<3": "",
  "migothemanz": "",
  "Meisaro": "",
  "Loganjl": "",
  "warlock": "",
  "tiago/picpay": "",
  "Alivia": "",
  "Kariami": "",
  "xMILF": "",
}

//inactive for now
// "SomiJinJin": "<@!288560748450283520>",
// "Lady_EverLuv": "<@!410476017178771466>",
// "Cyphur": "<@!331357186636775425>",
// "Lifesaber": "<@!231932564858863626>",
// "AlphaWarrior": "<@!243920522973282306>",
// "Galaxy_Girl": "<@!993340222395912212>",
// "zoey<3": "<@!283075630676049921>",
// "migothemanz": "<@!705464980916666428>",
// "Meisaro": "<@!369461349551439872>",
// "Loganjl": "<@!691091196516368465>",
// "warlock": "<@!624118079223496714>",
// "tiago/picpay": "<@!381128913566564354>",
// "Kariami": "<@!339074887131987968>",
// "Corbin": "<@!741732237229293608>",
// "Alivia": "<@!767945907059818516>",
// "xMILF": "<@!471098436716855306>",


const concreteSquads = [
  ["iskiplegdays", "WoodUToDeath", "GILF", "Aenara", "LimitedEdition", "grei", "Kariami", "iiFAKE", "xMILF", "Natta"],
  ["Darcytheus", "Aeliah", "Elonei", "Aemirah", "Ranker", "Meisaro", "slewdem", "Icepaw/Exo", "Fyara", "Anori", "LunaRoja", "kenichi"],
  ["Rausky", "lKygo", "ganjarule", "Siachi", "nigelus","BulleT", "Clubber", "Talonwife", "Alitah/Shivy"],
  ["✠ ጠ𝔦𝘚ፕ𝔦 / L𝔦ፕН𝔦 ✠", "Gly", "xAnastasiax/ana", "SmashWolf", "BetterDays/TerribleNights", "FishyFret/Chayy"],
  [],
  ["Foxxeh", "KayZier", "WhiteDove_", "lynshei", "EvoPony", "Xaoziq", "Maryiam", "RedoX", "IlaSeeker", "Corbin"],
  [],
  []
];

export { clerics, mystics, blademasters, concreteSquads, factionBase }