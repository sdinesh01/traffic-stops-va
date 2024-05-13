const tsv = `agency_name	2020	2021	2022	2023
Abingdon Police Department	516.0	1237.0	1339.0	1228.0
Accomack County Sheriff's Office	351.0	804.0	1231.0	579.0
Albemarle County Police Department	1510.0	5448.0	10589.0	7473.0
Albemarle County Sheriff's Office	26.0	46.0	83.0	42.0
Alcoholic Beverage Control Authority	0.0	3.0	0.0	1.0
Alexandria City Sheriff's Office	17.0	76.0	32.0	17.0
Alexandria Police Department	5675.0	15808.0	10412.0	6571.0
Alleghany County Sheriff's Office	545.0	833.0	687.0	571.0
Altavista Police Department	234.0	599.0	759.0	637.0
Amelia County Sheriff's Office	263.0	932.0	1968.0	1926.0
Amherst County Sheriff's Office	1239.0	2007.0	2517.0	1595.0
Amherst Police Department	35.0	204.0	247.0	276.0
Appalachia Police Department	8.0	0.0	0.0	0.0
Appomattox County Sheriff's Office	708.0	995.0	1929.0	1465.0
Aquia Harbour Police Department	209.0	285.0	423.0	127.0
Arlington County Police Department	12610.0	12751.0	14021.0	9161.0
Arlington County Sheriff's Office	59.0	317.0	234.0	174.0
Ashland Police Department	611.0	1651.0	3666.0	1486.0
Augusta County Sheriff's Office	2479.0	5466.0	7200.0	7603.0
BWXT Police Department	0.0	0.0	4.0	2.0
Bath County Sheriff's Office	66.0	177.0	439.0	292.0
Bedford County Sheriff's Office	1470.0	1988.0	1969.0	1826.0
Bedford Police Department	611.0	1745.0	1578.0	1179.0
Berryville Police Department	129.0	201.0	285.0	268.0
Big Stone Gap Police Department	200.0	274.0	318.0	593.0
Blacksburg Police Department	1745.0	2224.0	1900.0	2176.0
Blackstone Police Department	24.0	2544.0	2602.0	1456.0
Bland County Sheriff's Office	744.0	1768.0	2495.0	417.0
Bluefield Police Department	1080.0	1696.0	1343.0	895.0
Boones Mill Police Department	0.0	280.0	647.0	576.0
Botetourt County Sheriff's Office	3481.0	5334.0	6918.0	3798.0
Bowling Green Police Department	200.0	475.0	269.0	168.0
Boydton Police Department	0.0	0.0	207.0	37.0
Boykins Police Department	304.0	505.0	452.0	210.0
Branchville Police Department	109.0	206.0	161.0	88.0
Bridgewater College Police Department	2.0	2.0	6.0	26.0
Bridgewater Police Department	420.0	776.0	636.0	743.0
Bristol Police Department	796.0	2959.0	2210.0	1467.0
Broadway Police Department	100.0	661.0	329.0	0.0
Brodnax Police Department	0.0	394.0	538.0	15.0
Brookneal Police Department	8.0	193.0	378.0	237.0
Brunswick County Sheriff's Office	8030.0	18685.0	16390.0	13347.0
Buchanan County Sheriff's Office	423.0	821.0	1021.0	575.0
Buckingham County Sheriff's Office	182.0	298.0	620.0	889.0
Buena Vista Police Department	564.0	1114.0	945.0	513.0
Burkeville Police Department	0.0	60.0	269.0	368.0
CSX Transportation Police	0.0	18.0	73.0	41.0
Campbell County Sheriff's Office	1020.0	1816.0	1924.0	977.0
Cape Charles Police Department	394.0	474.0	604.0	432.0
Carilion Health System Police Department	1.0	0.0	0.0	0.0
Caroline County Sheriff's Office	731.0	1567.0	6418.0	2278.0
Carroll County Sheriff's Office	2621.0	4572.0	8278.0	5378.0
Cedar Bluff Police Department	127.0	153.0	188.0	38.0
Central Virginia Community College Police	1.0	0.0	3.0	0.0
Charlotte County Sheriff's Office	941.0	1173.0	708.0	1981.0
Charlottesville Albemarle Airport Police Department	1.0	5.0	6.0	1.0
Charlottesville Police Department	526.0	2224.0	3767.0	1726.0
Chase City Police Department	462.0	583.0	852.0	1140.0
Chatham Police Department	344.0	620.0	580.0	397.0
Chesapeake Bay Bridge-Tunnel Police Department	2415.0	4367.0	3315.0	2568.0
Chesapeake City Sheriff's Office	40.0	23.0	50.0	6.0
Chesapeake Police Department	11301.0	17173.0	15697.0	13674.0
Chesterfield County Police Department	20323.0	33761.0	36448.0	9771.0
Chesterfield County Sheriff's Office	77.0	158.0	197.0	140.0
Chilhowie Police Department	563.0	683.0	821.0	828.0
Chincoteague Police Department	449.0	583.0	466.0	351.0
Christiansburg Police Department	1208.0	2585.0	4340.0	3184.0
Christopher Newport University Police Department	159.0	241.0	276.0	437.0
Clarke County Sheriff's Office	285.0	2078.0	2792.0	2034.0
Clarksville Police Department	44.0	136.0	637.0	15.0
Clifton Forge Police Department	470.0	355.0	359.0	312.0
Clinchco Police Department	12.0	14.0	0.0	0.0
Clintwood Police Department	173.0	170.0	130.0	54.0
Coeburn Police Department	238.0	206.0	245.0	242.0
Colonial Beach Police Department	67.0	353.0	559.0	292.0
Colonial Heights City Sheriff's Office	0.0	0.0	0.0	5.0
Colonial Heights Police Department	4156.0	5530.0	4461.0	3101.0
Courtland Police Department	0.0	155.0	91.0	94.0
Covington Police Department	128.0	891.0	644.0	498.0
Craig County Sheriff's Office	410.0	904.0	763.0	524.0
Craigsville Police Department	15.0	2.0	0.0	0.0
Crewe Police Department	146.0	215.0	248.0	189.0
Culpeper County Sheriff's Office	430.0	966.0	1517.0	943.0
Culpeper Police Department	689.0	2691.0	3342.0	2237.0
Cumberland County Sheriff's Office	297.0	1000.0	947.0	954.0
Damascus Police Department	115.0	378.0	36.0	0.0
Danville City Sheriff's Office	0.0	2.0	2.0	1.0
Danville Police Department	2596.0	4496.0	2517.0	2334.0
Dayton Police Department	358.0	783.0	637.0	381.0
Department Of Motor Vehicles Law Enforcement	753.0	1467.0	933.0	432.0
Department of Conservation and Recreation	218.0	629.0	736.0	1071.0
Dickenson County Sheriff's Office	215.0	323.0	21.0	0.0
Dinwiddie County Sheriff's Office	5638.0	4940.0	4028.0	1316.0
Division of Capitol Police	135.0	411.0	522.0	283.0
Drakes Branch Police Department	0.0	49.0	142.0	29.0
Dublin Police Department	469.0	612.0	494.0	524.0
Dumfries Police Department	261.0	677.0	856.0	1090.0
Eastern Virginia Medical School Police Department	6.0	3.0	0.0	0.0
Eastville Police Department	5767.0	12509.0	9626.0	7513.0
Elkton Police Department	159.0	348.0	384.0	275.0
Emporia City Sheriff's Office	596.0	866.0	549.0	220.0
Emporia Police Department	4256.0	7113.0	4884.0	4318.0
Essex County Sheriff's Office	466.0	685.0	731.0	336.0
Exmore Police Department	3063.0	5325.0	5293.0	3886.0
Fairfax City Police Department	897.0	1624.0	2750.0	2174.0
Fairfax County Police Department	14454.0	25149.0	67653.0	43720.0
Fairfax County Sheriff's Office	118.0	110.0	0.0	0.0
Falls Church City Sheriff's Office	2.0	3.0	11.0	79.0
Falls Church Police Department	524.0	975.0	2666.0	2385.0
Farmville Police Department	1006.0	2426.0	3287.0	3113.0
Fauquier County Fire Marshals Office	1.0	0.0	0.0	0.0
Fauquier County Sheriff's Office	3907.0	9443.0	10231.0	9320.0
Floyd County Sheriff's Office	798.0	1584.0	1652.0	1631.0
Fluvanna County Sheriff's Office	987.0	1415.0	1521.0	1412.0
Franklin County Sheriff's Office	372.0	2195.0	2842.0	2156.0
Franklin Police Department	573.0	1380.0	1526.0	258.0
Frederick County Sheriff's Office	3889.0	5806.0	5355.0	4511.0
Fredericksburg City Sheriff's Office	9.0	50.0	43.0	25.0
Fredericksburg Police Department	1092.0	5799.0	7016.0	5837.0
Front Royal Police Department	1739.0	3236.0	3486.0	3862.0
Galax Police Department	735.0	1368.0	1472.0	1346.0
Gate City Police Department	265.0	554.0	276.0	38.0
George Mason University Police Department	170.0	615.0	846.0	929.0
Germanna Community College Police Department	1.0	0.0	0.0	0.0
Giles County Sheriff's Office	406.0	204.0	393.0	441.0
Glade Spring Police Department	25.0	137.0	208.0	145.0
Glasgow Police Department	10.0	15.0	3.0	0.0
Glen Lyn Police Department	146.0	42.0	0.0	0.0
Gloucester County Sheriff's Office	1143.0	1907.0	2891.0	2387.0
Goochland County Sheriff's Office	1071.0	2835.0	4052.0	3230.0
Gordonsville Police Department	585.0	2130.0	1294.0	1467.0
Grayson County Sheriff's Office	194.0	487.0	450.0	243.0
Greene County Sheriff's Office	498.0	1564.0	1243.0	3268.0
Greensville County Sheriff's Office	4829.0	8124.0	10847.0	7139.0
Gretna Police Department	6.0	71.0	82.0	69.0
Grottoes Police Department	134.0	307.0	416.0	521.0
Grundy Police Department	174.0	181.0	0.0	47.0
Halifax County Sheriff's Office	111.0	605.0	530.0	178.0
Halifax Police Department	231.0	978.0	882.0	329.0
Hampden-Sydney College Police	3.0	13.0	0.0	0.0
Hampton Police Division	3663.0	8182.0	6020.0	3357.0
Hampton University Police Dept	96.0	39.0	115.0	36.0
Hanover County Sheriff's Office	9724.0	16322.0	10674.0	6574.0
Harrisonburg Police Department	1511.0	7757.0	5538.0	3473.0
Haymarket Police Department	378.0	465.0	472.0	378.0
Haysi Police Department	53.0	68.0	45.0	36.0
Henrico Police Department	13732.0	33806.0	37611.0	28221.0
Henry County Sheriff's Office	1237.0	2181.0	1827.0	1553.0
Herndon Police Department	1923.0	6802.0	6131.0	4851.0
Highland County Sheriff's Office	51.0	129.0	78.0	79.0
Hillsville Police Department	1617.0	3638.0	4622.0	4896.0
Honaker Police Department	165.0	115.0	0.0	0.0
Hopewell City Sheriff's Office	1944.0	4019.0	6300.0	5516.0
Hopewell Police Department	960.0	2431.0	2850.0	905.0
Hurt Police Department	0.0	15.0	60.0	19.0
Independence Police Department	13.0	82.0	42.0	50.0
Isle Of Wight County Sheriff's Office	1073.0	1698.0	2937.0	2017.0
J. Sargeant Reynolds Community College	0.0	0.0	0.0	1.0
James City County Police Department	2263.0	4502.0	4761.0	3250.0
James Madison University Police	131.0	406.0	566.0	366.0
Jonesville Police Department	225.0	291.0	363.0	385.0
Kenbridge Police Department	17.0	70.0	131.0	201.0
Kilmarnock Police Department	41.0	166.0	157.0	121.0
King And Queen County Sheriff's Office	1863.0	2334.0	3467.0	2396.0
King George County Sheriff's Office	1277.0	5234.0	5572.0	4030.0
King William Sheriff's Office	783.0	1108.0	1429.0	958.0
Kingsmill Police Department	125.0	258.0	320.0	152.0
La Crosse Police Department	182.0	233.0	129.0	27.0
Lake Monticello Police Department	571.0	810.0	0.0	62.0
Lancaster County Sheriff's Office	296.0	622.0	877.0	550.0
Lawrenceville Police Department	458.0	505.0	664.0	957.0
Lebanon Police Department	163.0	303.0	217.0	100.0
Lee County Sheriff's Office	0.0	258.0	221.0	148.0
Leesburg Police Department	1775.0	4305.0	3162.0	4124.0
Lexington Police Department	424.0	1168.0	1299.0	534.0
Liberty University Police Department	680.0	987.0	1302.0	414.0
Longwood University Police Department	154.0	417.0	464.0	385.0
Loudoun County Sheriff's Office	10644.0	17250.0	16884.0	16170.0
Louisa County Sheriff's Office	714.0	2626.0	3199.0	2192.0
Louisa Police Department	235.0	773.0	286.0	177.0
Lunenburg County Sheriff's Office	103.0	392.0	157.0	240.0
Luray Police Department	387.0	1076.0	449.0	447.0
Lynchburg City Sheriff's Office	3.0	2.0	1.0	0.0
Lynchburg Police Department	1564.0	3576.0	2933.0	3407.0
Lynchburg Regional Airport Police Department	0.0	0.0	1.0	0.0
Madison County Sheriff's Office	300.0	2719.0	1842.0	2364.0
Manassas Park Police Department	2461.0	2604.0	2345.0	2226.0
Manassas Police Department	2316.0	4162.0	3720.0	2798.0
Marion Police Department	380.0	371.0	272.0	13.0
Martinsville City Sheriff's Office	0.0	9.0	4.0	1.0
Martinsville Police Department	2256.0	2491.0	2121.0	901.0
Mathews County Sheriff's Office	403.0	1410.0	1546.0	757.0
McKenney Police Department	44.0	69.0	35.0	11.0
Mecklenburg Sheriff's Office	1690.0	2665.0	1632.0	0.0
Metropolitan Washington Airports Authority Police	1668.0	6458.0	5546.0	4540.0
Middleburg Police Department	52.0	65.0	355.0	308.0
Middlesex County Sheriff's Office	281.0	725.0	373.0	491.0
Middletown Police Department	227.0	694.0	560.0	436.0
Montgomery County Sheriff's Office	1451.0	2160.0	2995.0	3106.0
Mount Jackson Police Department	74.0	179.0	119.0	91.0
Narrows Police Department	489.0	494.0	255.0	276.0
Nelson County Sheriff's Office	809.0	1388.0	1745.0	1247.0
New Kent Sheriff's Office	1754.0	4310.0	3353.0	2153.0
New Market Police Department	105.0	154.0	236.0	244.0
Newport News Police Department	5378.0	10437.0	0.0	0.0
Newport News Sheriff's Office	6.0	49.0	6.0	0.0
Newport News/Williamsburg International Airport Police	2.0	0.0	3.0	0.0
Norfolk Airport Authority Police Department	5.0	50.0	71.0	58.0
Norfolk Police Department	2134.0	10824.0	4692.0	3431.0
Norfolk Sheriff's Office	0.0	105.0	139.0	73.0
Norfolk Southern Police Department	1.0	2.0	2.0	0.0
Norfolk State University Police Department	20.0	99.0	331.0	454.0
Northampton County Sheriff's Office	1670.0	1134.0	1480.0	2009.0
Northern Virginia Community College Police Department	97.0	324.0	343.0	162.0
Northumberland County Sheriff's Office	301.0	0.0	0.0	0.0
Norton Police Department	499.0	437.0	612.0	503.0
Norton Sheriff's Office	0.0	0.0	4.0	0.0
Nottoway County Sheriff's Office	48.0	482.0	544.0	513.0
Occoquan Police Department	1268.0	3192.0	3100.0	1807.0
Old Dominion University Police Department	817.0	1467.0	699.0	557.0
Onancock Police Department	169.0	150.0	276.0	150.0
Onley Police Department	984.0	2101.0	388.0	0.0
Orange County Sheriff's Office	1102.0	3224.0	3968.0	4563.0
Orange Police Department	837.0	1764.0	1441.0	1002.0
Page County Sheriff's Office	521.0	577.0	578.0	679.0
Parksley Police Department	0.0	5.0	8.0	1.0
Patrick & Henry Community College Police	0.0	0.0	1.0	0.0
Patrick County Sheriff's Office	534.0	832.0	1352.0	1393.0
Pearisburg Police Department	615.0	1176.0	545.0	71.0
Pembroke Police Department	497.0	805.0	367.0	96.0
Pennington Gap Police Department	112.0	266.0	207.0	150.0
Petersburg Bureau Of Police	876.0	1866.0	2378.0	1707.0
Petersburg City Sheriff's Office	39.0	315.0	197.0	343.0
Pittsylvania County Sheriff's Office	293.0	553.0	220.0	191.0
Pocahontas Police Department	47.0	6.0	0.0	6.0
Poquoson Police Department	507.0	580.0	901.0	891.0
Portsmouth City Sheriff's Office	122.0	403.0	365.0	99.0
Portsmouth Police Department	1265.0	2105.0	2996.0	2888.0
Powhatan Sheriff's Office	1463.0	2634.0	2930.0	2679.0
Prince Edward County Sheriff's Office	1253.0	2676.0	1998.0	1185.0
Prince George County Police Department	1629.0	6461.0	6236.0	6385.0
Prince George County Sheriff's Office	0.0	47.0	34.0	0.0
Prince William County Police Department	14838.0	21118.0	20925.0	12861.0
Prince William County Sheriff's Office	52.0	99.0	105.0	85.0
Pulaski County Sheriff's Office	1987.0	2541.0	1849.0	442.0
Pulaski Police Department	644.0	564.0	1049.0	1486.0
Purcellville Police Department	602.0	1344.0	1845.0	706.0
Radford City Police Department	1268.0	1627.0	1527.0	1197.0
Radford University Police Department	112.0	236.0	777.0	1153.0
Rappahannock County Sheriff's Office	1223.0	2443.0	3238.0	2467.0
Regent University Police Department	19.0	46.0	200.0	189.0
Remington Police Department	0.0	25.0	40.0	8.0
Rich Creek Police Department	130.0	179.0	109.0	113.0
Richard Bland College Police Department	0.0	22.0	1.0	2.0
Richlands Police Department	411.0	744.0	708.0	534.0
Richmond County Sheriff's Office	404.0	897.0	935.0	290.0
Richmond International Airport Police	99.0	120.0	153.0	96.0
Richmond Police Department	3535.0	5236.0	1984.0	1563.0
Roanoke City Police Department	3698.0	5516.0	6656.0	4984.0
Roanoke City Sheriff's Office	0.0	0.0	23.0	24.0
Roanoke County Police Department	7113.0	13482.0	7107.0	6092.0
Roanoke-Blacksburg Regional Airport	0.0	2.0	3.0	0.0
Rockbridge County Sheriff's Office	2062.0	2243.0	3021.0	1800.0
Rockingham County Sheriff's Office	857.0	3334.0	3400.0	1551.0
Rocky Mount Police Department	446.0	938.0	1357.0	1561.0
Rural Retreat Police Department	7.0	7.0	8.0	9.0
Russell County Sheriff's Office	111.0	127.0	82.0	32.0
Salem Police Department	1406.0	4189.0	4875.0	3437.0
Saltville Police Department	0.0	48.0	0.0	0.0
Scott County Sheriff's Office	167.0	747.0	912.0	397.0
Scottsville Police Department	171.0	154.0	257.0	274.0
Shenandoah County Sheriff's Office	511.0	938.0	1044.0	746.0
Shenandoah Police Department	39.0	106.0	107.0	209.0
Smithfield Police Department	904.0	1083.0	1503.0	1007.0
Smyth County Sheriff's Office	3704.0	3329.0	2731.0	1808.0
South Boston Police Department	299.0	846.0	1629.0	1676.0
South Hill Police Department	493.0	1370.0	1266.0	1291.0
Southampton County Sheriff's Office	2407.0	1468.0	0.0	2736.0
Southwest Virginia Community College Police Department	0.0	2.0	2.0	0.0
Spotsylvania County Sheriff's Office	2710.0	5105.0	5891.0	7061.0
St. Paul Police Department	90.0	160.0	135.0	0.0
Stafford County Sheriff's Office	7429.0	14367.0	14707.0	9544.0
Stanley Police Department	31.0	74.0	45.0	23.0
Staunton City Sheriff's Office	0.0	1.0	1.0	4.0
Staunton Police Department	1073.0	4921.0	4888.0	2585.0
Stephens City Police Department	5.0	358.0	407.0	306.0
Strasburg Police Department	424.0	714.0	1040.0	1663.0
Suffolk City Sheriff's Office	3.0	3.0	7.0	4.0
Suffolk Police Department	4006.0	8316.0	8263.0	5352.0
Surry County Sheriff's Office	490.0	841.0	1046.0	434.0
Sussex County Sheriff's Office	3281.0	5866.0	5470.0	1745.0
Tappahannock Police Department	117.0	384.0	249.0	1228.0
Tazewell County Sheriff's Office	806.0	1088.0	1318.0	700.0
Tazewell Police Department	142.0	397.0	337.0	0.0
Timberville Police Department	140.0	786.0	690.0	358.0
UVA's College At Wise Police	1.0	5.0	19.0	14.0
University Of Mary Washington Police Department	6.0	10.0	31.0	27.0
University Of Richmond Police Department	8.0	68.0	118.0	326.0
University Of Virginia Police Department	357.0	772.0	925.0	901.0
VA0800201	0.0	0.0	1.0	0.0
VCU Police Department	76.0	501.0	1492.0	1636.0
VMI Police Department	80.0	155.0	111.0	107.0
Victoria Police Department	34.0	10.0	0.0	0.0
Vienna Police Department	1478.0	2644.0	5555.0	3496.0
Vinton Police Department	707.0	1062.0	1260.0	1143.0
Virginia Beach City Sheriff's Office	5.0	18.0	21.0	4.0
Virginia Beach Police Department	14844.0	34845.0	35543.0	22099.0
Virginia Department of Wildlife Resources	251.0	1300.0	2006.0	1554.0
Virginia Lottery Department	0.0	1.0	0.0	0.0
Virginia Marine Police Department	40.0	64.0	82.0	40.0
Virginia Peninsula Community College Police	15.0	30.0	17.0	0.0
Virginia Port Authority	229.0	747.0	867.0	806.0
Virginia State University Police Department	11.0	183.0	235.0	195.0
Virginia Tech Police Department	704.0	916.0	1830.0	1340.0
Warren County Sheriff's Office	2258.0	4756.0	3893.0	2457.0
Warrenton Police Department	718.0	1634.0	1198.0	868.0
Warsaw Police Department	184.0	455.0	378.0	305.0
Washington County Sheriff's Office	6816.0	10205.0	10095.0	8578.0
Washington Metro Area Transit PD	0.0	0.0	0.0	1184.0
Waverly Police Department	115.0	0.0	0.0	0.0
Waynesboro Police Department	327.0	822.0	1080.0	846.0
Weber City Police Department	0.0	643.0	248.0	94.0
West Point Police Department	142.0	579.0	1506.0	1188.0
Westmoreland County Sheriff's Office	1172.0	2939.0	3591.0	2069.0
White Stone Police Department	0.0	11.0	1.0	3.0
William and Mary Police Department	10.0	64.0	141.0	116.0
Williamsburg Police Department	2662.0	5422.0	5195.0	3262.0
Williamsburg-James City County Sheriff's Office	0.0	5.0	0.0	0.0
Winchester City Sheriff's Office	43.0	22.0	27.0	33.0
Winchester Police Department	1950.0	3385.0	4813.0	3858.0
Windsor Police Department	918.0	1423.0	1543.0	1035.0
Wintergreen Police Department	21.0	78.0	108.0	139.0
Wise County Sheriff's Office	772.0	729.0	754.0	705.0
Wise Police Department	85.0	274.0	181.0	248.0
Woodrow Wilson Rehibilitation Center Police Department	6.0	35.0	70.0	19.0
Woodstock Police Department	316.0	836.0	751.0	378.0
Wythe County Sheriff's Office	2622.0	5882.0	6477.0	5236.0
Wytheville Community College Police Department	0.0	1.0	0.0	0.0
Wytheville Police Department	0.0	396.0	716.0	778.0
York - Poquoson Sheriff's Office	2481.0	5363.0	7001.0	3853.0
`;

const rows = tsv.split('\n').map(str => str.split('\t'));
const headers = rows.shift();
const years = headers.slice(1).map(n => +n);

const agencies = rows.map(row => {
	return {
		name: row[0],
		data: years.map((year, i) => ({
			x: year,
			y: +row[i + 1]
		})).filter(d => d.y)
	};
});

export { agencies, years };
