const products = [
    // Процессоры (1-12)
    { 
        id: 1, 
        name: "Процессор Intel Core i7-12700K", 
        price: 30000, 
        category: "Процессоры",
        specs: "12 ядер (8P+4E), 20 потоков, 3.6-5.0 ГГц, LGA 1700, 25 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/82232e203ae60c47d7a97c37efb7fb88/1293a887ee0de3b1c764e784eafdbb75170a6d20505db52bf455674b08287906.jpg"
    },
    { 
        id: 2, 
        name: "Процессор AMD Ryzen 9 5900X", 
        price: 35000, 
        category: "Процессоры",
        specs: "12 ядер, 24 потока, 3.7-4.8 ГГц, AM4, 64 МБ L3, TDP 105W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/4dfc21bf83808c4af841f1a04104c323/d6aadf422b1cb3e2042e0462983b9cbca53853dc8b3388b01d130473c1163f76.jpg"
    },
    { 
        id: 3, 
        name: "Процессор Intel Core i5-12600K", 
        price: 25000, 
        category: "Процессоры",
        specs: "10 ядер (6P+4E), 16 потоков, 3.7-4.9 ГГц, LGA 1700, 20 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/2f7b831f5833917b3a487f6cf0a51954/06d901811a3ea7fd92717ad8672bb3ae784b4ab403914550fcd200ed08b28ff9.jpg"
    },
    { 
        id: 4, 
        name: "Процессор AMD Ryzen 5 5600X", 
        price: 22000, 
        category: "Процессоры",
        specs: "6 ядер, 12 потоков, 3.7-4.6 ГГц, AM4, 32 МБ L3, TDP 65W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/4f62062c2f24a1a4f25fce78b21d79ba/a60d568636c393c611792fb99f68dd97fb6fe3de90e8bd6f085c7c321e9e32b0.jpg"
    },
    { 
        id: 5, 
        name: "Процессор Intel Core i9-12900K", 
        price: 45000, 
        category: "Процессоры",
        specs: "16 ядер (8P+8E), 24 потока, 3.2-5.2 ГГц, LGA 1700, 30 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/995c130e3d1265276dfed1dbe882e7aa/00bbf93450aecb615327f02be1c617b85a13ef41aecaa6c99c7a524583b2df8b.jpg"
    },
    { 
        id: 6, 
        name: "Процессор AMD Ryzen 7 5800X", 
        price: 28000, 
        category: "Процессоры",
        specs: "8 ядер, 16 потоков, 3.8-4.7 ГГц, AM4, 32 МБ L3, TDP 105W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/e8a017320cd4f65c2bfedd1dd4a97a68/b14b3e25d62773d234b3cbc4a6d8511774d2594be5ea96871b8821ef46148b8b.jpg"
    },
    { 
        id: 7, 
        name: "Процессор Intel Core i3-12100F", 
        price: 15000, 
        category: "Процессоры",
        specs: "4 ядра, 8 потоков, 3.3-4.3 ГГц, LGA 1700, 12 МБ кэш, TDP 58W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/f2ea5aeb5cf020b61d92403cef54bdcc/86bc0632fb125aa5a7ec17ae73cfe23974d3862c4fbacb18a46e29b559e81985.jpg"
    },
    { 
        id: 8, 
        name: "Процессор AMD Ryzen 3 3300X", 
        price: 18000, 
        category: "Процессоры",
        specs: "4 ядра, 8 потоков, 3.8-4.3 ГГц, AM4, 16 МБ L3, TDP 65W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/85d3d792bd336497501f66e32b94fce4/d606b7ee08665528c35a4786cb5df4bc78620e5748b22046b17e4123b4a1f06a.jpg"
    },
    { 
        
        id: 9,
    name: "Процессор Intel Core i9-14900K", 
    price: 60000, 
    category: "Процессоры",
    specs: "24 ядра (8P+16E), 32 потока, 3.2-6.0 ГГц, LGA 1700, 36 МБ кэш, TDP 125W, Intel UHD Graphics 770",
    image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1c2b8a61b68c233efc0e62bcbc2496b3/0b2effb5e95b28fcbd055f1414ea60e25ea1c48a2bc543d9afa5ee2d0d3c8740.jpg" 
    },
    { 
        
        id: 10,
        name: "Процессор AMD Threadripper PRO 5975WX", 
        price: 180000,
        category: "Процессоры",
        specs: "32 ядра / 64 потока, 3.6-4.5 ГГц, sWRX8, 128 МБ L3, 8-канальный DDR4, TDP 280W, без графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/715e2d23942ec4ca16cabeccf04e81cc/b291b15287888397590b1db474297049ec0fb0487646b5b0d34b8a10467588cb.jpg" 
        
    },
    { 
        id: 11, 
        name: "Процессор Intel Core i7-11700K", 
        price: 28000, 
        category: "Процессоры",
        specs: "8 ядер, 16 потоков, 3.6-5.0 ГГц, LGA 1200, 16 МБ кэш, TDP 125W, Intel UHD Graphics 750",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/57a2e5860668f925063f2b199f391a4a/65b1c192af1b765e327d8b0a115d7f00bfb225a4ef1f85a9e08d969d281094fa.jpg"
    },
    { 
        id: 12, 
        name: "Процессор AMD Ryzen 9 5950X", 
        price: 60000, 
        category: "Процессоры",
        specs: "16 ядер, 32 потока, 3.4-4.9 ГГц, AM4, 64 МБ L3, TDP 105W, без встроенной графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/01842e1f765ea3ffc6259dec1117e90f/488d5a9b45ddbeb5eafce0564bef42074b75f87be95b9299120bd881bf6dba64.jpg"
    },

    // Видеокарты (13-24)
    { 
        id: 13, 
        name: "Видеокарта Palit GeForce RTX 4070 Ti Super GameRock 16GB",
        price: 89990,
        category: "Видеокарты",
        specs: "16GB GDDR6X, 8448 ядер, 2340-2610 МГц, 256-bit, PCIe 4.0, DLSS 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3e996a24ae8c27ce4e8a45cd5463cc02/64b7b66df48de1f09694b1bc1c7ad2b95dda703f3ee65c9fd5236ffa9a0213b8.jpg"
    },
    { 
        id: 14, 
        name: "Видеокарта PowerColor AMD Radeon RX 7800 XT Hellhound 16GB",
        price: 64990,
        category: "Видеокарты",
        specs: "16GB GDDR6, 3840 поток. процессоров, 2124-2430 МГц, 256-bit, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3e89d1f806a5ed8a0ce23e139a7a36a9/d647bc3e9cda8b9133a9e48ea2cb835730c701270170801fd0e66164c8e0484b.png"
    },
    { 
        id: 15, 
        name: "Видеокарта MSI GeForce RTX 4060 Ti Ventus 2X Black 8GB",
        price: 44990,
        category: "Видеокарты",
        specs: "8GB GDDR6, 4352 ядра, 2310–2535 МГц, 128-bit, PCIe 4.0, DLSS 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/b419756a5a0751510eeb35ebfbba8ebd/c9b4c733b5c504231a0a59d558300b2e94064d56e9e99be304094398036e77ef.jpg"
    },
    { 
        id: 16, 
        name: "Видеокарта PowerColor Hellhound Radeon RX 7700 XT 12GB",
        price: 54990,
        category: "Видеокарты",
        specs: "12GB GDDR6, 3456 потоковых процессоров, 2171-2544 МГц, 192-bit, PCIe 4.0, FSR 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/b3c63ef9e2eaa8f32a2cc65438895dc6/96dbd968778acb0a2079962038960da16d7608467a2e01a918bd51ab3de0e9ea.png"
    },
    { 
        id: 17, 
        name: "Видеокарта Palit GeForce RTX 4080 Super INFINITY 16GB",
        price: 109990,
        category: "Видеокарты",
        specs: "16GB GDDR6X, 10240 ядер, 2295-2550 МГц, 256-bit, PCIe 4.0, DLSS 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/2e193ac7b061272dd5b866eeff0d0a9d/f411a928fb6e724f964349553ad92748759112c7e6261370eee5e8c623bd1120.jpg"
    },
    { 
        id: 18, 
        name: "Видеокарта Sapphire AMD Radeon RX 7900 XT  PULSE OC 20GB",
        price: 89990,
        category: "Видеокарты",
        specs: "20GB GDDR6, 5376 поток. процессоров, 2000-2400 МГц, 320-bit, PCIe 4.0, FSR 3",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/46ef6fd6def73ce6ae4013f992269b63/a900b30e42203800bf10cc9e4a1ba1e6ee74b185b09074a4691c371365de0e3e.jpg"
    },
    { 
        id: 19, 
        name: "Видеокарта Palit GeForce RTX 4070 Super JetStream 12GB",
        price: 69990,
        category: "Видеокарты",
        specs: "12GB GDDR6X, 7168 ядер, 1980-2475 МГц, 192-bit, PCIe 4.0, DLSS 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/503d56e5fc2763d41d39f4af9f573681/aa31a0b56821fbf47f837725cf8934e38489772c0842d6c0b52a26c861a35634.jpg"
    },
    { 
        id: 20, 
        name: "Видеокарта PowerColor Fighter Radeon RX 7600 8GB",
        price: 34990,
        category: "Видеокарты",
        specs: "8GB GDDR6, 2048 поток. процессоров, 2250-2655 МГц, 128-bit, PCIe 4.0, FSR 3",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3fa99bdbf43a4f5505c1584519d5e939/2d3d5427c1c2ef9da03d095ebf6eb4d316f39bfe634c8f04bd649fd828803800.jpg"
    },
    { 
        id: 21, 
        name: "Видеокарта ASUS TUF GeForce RTX 4090 24GB", 
        price: 169990, 
        category: "Видеокарты",
        specs: "24GB GDDR6X, 16384 ядер CUDA, 2235-2520 МГц, 384-bit, PCIe 4.0, DLSS 3, 3xDisplayPort 1.4a, 1xHDMI 2.1",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/0b0d7891b904c72f4e800448821262a2/e67fead6e29baafb1d0d6e8a224f8641834ade0368092a07aa2a89cf86edfcca.jpg" 
    },
    { 
        id: 22, 
        name: "Видеокарта AMD Radeon Pro W7800", 
        price: 130000, 
        category: "Видеокарты",
        specs: "32 ГБ GDDR6, 3840 потоковых процессоров, 2075-2324 МГц, 256 бит, PCIe 4.0, 250W, 6xminiDP",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/427f1b0ae6b4220708f65175b877127d/c2a1a8a803ec190d1bb9a0dca9d539da872d36b81de528725f74dd35765b4e25.jpg"
    },
    { 
        id: 23, 
        name: "Видеокарта Palit GeForce RTX 3050 KalmX", 
        price: 20000, 
        category: "Видеокарты",
        specs: "6 ГБ GDDR6, 2560 ядер CUDA, 1042-1777 МГц, 96 бит, PCIe 4.0, 130W, 3xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/e888370bce112b7fd1c51549701ddd06/2d6b6eb15ef7313819760aa01a9936774c21f35f89fe45dcb7d6b0020d55f6aa.jpg"
    },
    { 
        id: 24, 
        name: "Видеокарта ASRock AMD Radeon RX 6500 XT Challenger ITX", 
        price: 15000, 
        category: "Видеокарты",
        specs: "4 ГБ GDDR6, 1024 потоковых процессоров, 2610-2815 МГц, 64 бит, PCIe 4.0, 107W, 1xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/95aa482b889139bcb31fd82b248cac97/6b3690b8b49d1f88f7bcb707d83c69e0b625ca72fe51e41aa159aa8013e2d2bc.jpg"
    },

    // Материнские платы (25-36)
    { 
        id: 25, 
        name: "Материнская плата ASUS ROG Strix Z690-E GAMING WIFI", 
        price: 30000, 
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z690, DDR5 до 6400 МГц, 4xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, ATX",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6bd537d33d03b6f2b9e62cc52a600720/23cd7771e0c5b15ad14fa34855b99e06aa1164947b74e9eba9ae65ad82e7d920.jpg"
    },
    { 
        id: 26, 
        name: "Материнская плата MSI MAG B550 Tomahawk", 
        price: 15000, 
        category: "Материнские платы",
        specs: "AM4, AMD B550, DDR4 до 4400 МГц, 2xM.2, 2.5G LAN, USB 3.2 Gen 2, ATX",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1d5948d9605a14e23dfc76315d11d21b/907bf69866a5592d2a92732fef8e99e4f91d83c3c763c13351dba3b29cfaa5e6.png"
    },
    { 
        id: 27, 
        name: "Материнская плата Gigabyte X570 AORUS Elite", 
        price: 20000, 
        category: "Материнские платы",
        specs: "AM4, AMD X570, DDR4 до 4400 МГц, 2xM.2, 1G LAN, USB 3.2 Gen 2, ATX",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/f378c920d6b5194e00cf87af0f321feb/3dc301b22c9480add1b0994730dd0fd826f9a23304466f75c0fdf7acbfc241d6.png"
    },
    { 
        id: 28, 
        name: "Материнская плата ASRock B660M Pro RS", 
        price: 12000, 
        category: "Материнские платы",
        specs: "LGA 1700, Intel B660, DDR4 до 5000 МГц, 2xM.2, 1G LAN, USB 3.2 Gen 1, microATX",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/893658732ca182cdd5ae136e119a7909/4cbe4df1d4460753e3204a461a695a5e856aea7626dbe5f6843afb23c9315779.png"
    },
    { 
        id: 29, 
        name: "Материнская плата ASUS TUF Gaming B650-PLUS",
        price: 18990,
        category: "Материнские платы",
        specs: "AM5, AMD B650, DDR5 до 6400 МГц, 2xM.2, 2.5G LAN, USB 3.2 Gen 2x2, HDMI/DP, ARGB",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1b8494c4428e2e9174dfa8b3e035d2a8/db3e8a381cb4ef78bb4021fabd4c15025c6b3f25091a758bfb94d9eebc9e5a3f.jpg"
    },
    { 
        id: 30, 
        name: "Материнская плата MSI MPG Z790 Edge WiFi",
        price: 32990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z790, DDR5 до 7200 МГц, 4xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/a3f14b6024f20ee99a7d518c8976840b/c2e60b5b86a54b577575f1031b01b3d682bbc6c95ce3a9d394f8020cfd680bdc.png"
    },
    { 
        id: 31, 
        name: "Материнская плата Gigabyte B550M AORUS ELITE",
        price: 10990,
        category: "Материнские платы",
        specs: "AM4, AMD B550, DDR4 до 4733 МГц, 2xM.2, 1G LAN, USB 3.2 Gen 2, HDMI/DP, microATX",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/9ca9885f90ae2a0cff4d72254fb099e8/00e1f557c0ccde4240113152d63be0e1974a77e2d654a683ab7be9e575d711c9.jpg"
    },
    { 
        id: 32, 
        name: "Материнская плата ASUS TUF Gaming Z690-Plus WiFi D4",
        price: 22990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z690, DDR4 до 5333 МГц, 3xM.2, WiFi 6, 2.5G LAN, USB 3.2 Gen 2x2, ARGB",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/90b6a63d565e15b0bfeb3c263297d906/258bef4f54590b699a937186bac68e8e8222f76e584c99da5e2b7a5d6d6cd63c.jpg"
    },
    { 
        id: 33, 
        name: "Материнская плата ASUS ROG Crosshair X670E Hero",
        price: 59990,
        category: "Материнские платы",
        specs: "AM5, AMD X670E, DDR5 до 6400 МГц, 5xM.2, WiFi 6E, 10G LAN + 2.5G LAN, USB4, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/418db19494d7b1c010e5e2d24b637a47/356a606faf70e0c6e7aec7ea334b17c552418d4eaf017ff20270d8ad53855569.jpg"
    },
    { 
        id: 34, 
        name: "Материнская плата MSI MEG X570 Godlike", 
        price: 50000, 
        category: "Материнские платы",
        specs: "AM4, AMD X570, DDR4 до 4800 МГц, 3xM.2, 10G LAN, WiFi 6, USB 3.2 Gen 2x2, E-ATX",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/721eb99e1a6494ce8d2d5c6bc4579abe/0098b9d88de1b39f05a41ea0442ff95f73e021454bd9ef5c87322f3670fa0cdc.jpg"
    },
    { 
        id: 35, 
        name: "Материнская плата ASUS Prime Z790-P WiFi",
        price: 24990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z790, DDR5 до 7200 МГц, 3xM.2, WiFi 6, 2.5G LAN, USB 3.2 Gen 2x2, ARGB",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/2b472bf154d4b0837877d31038832e6e/ba021b2f01eaee76cf28fb9194f273d5d266f1630e4f3945f95782b48b542da0.jpg"
    },
    { 
        id: 36, 
        name: "Материнская плата Gigabyte B760M AORUS ELITE AX",
        price: 16990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel B760, DDR5 до 7600 МГц, 2xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, ARGB",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/58b7a04a65bbd338a52e94c779f031bb/431512fdc2356b1d59e0eb419e9bfcbe040ae5d414f97dd631e0604ad0cb92b9.jpg"
    },

    // Оперативная память (37-48)
    { 
        id: 37, 
        name: "Оперативная память Corsair Vengeance LPX 32 ГБ", 
        price: 8000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-25600), CL16, 1.35V, 2x16 ГБ, черный радиатор",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/4e2470523bfc56bb7567a7f6df27dd2b/d3633b7ec5975060113de09913c08a97cb0473dcddfbdde3540fb33c0e33ac68.jpg"
    },
    { 
        id: 38, 
        name: "Оперативная память G.Skill Trident Z RGB 64 ГБ", 
        price: 16000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-28800), CL18, 1.35V, 2x32 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/3fbc17f15495173968e59c4f9c49d60c/374dff7976709cc77c3dd0a23f3075f23a06d681b1440217423effbda900de0f.png"
    },
    { 
        id: 39, 
        name: "Оперативная память Kingston HyperX Fury 8 ГБ", 
        price: 4000, 
        category: "Оперативная память",
        specs: "DDR4 3466 МГц (PC4-21300), CL16, 1.2V, 1x8 ГБ, черный радиатор",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/9b54e984d3d85f1e8366827f6c1b379c/7bf0c48bfb2f76cca029577fb4a7f8d990c8ea19b1533a8618bee18f8fa0675a.jpg"
    },
    { 
        id: 40, 
        name: "Оперативная память Crucial Ballistix 16 ГБ RGB", 
        price: 7000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-25600), CL16, 1.35V, 1x16 ГБ, красный радиатор",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/342e21dd20be774cb79d57b77b3c6faa/2d8f581038d36647b25e8f2801a6fe8087df5b2aac8aa7b09b7088651f324001.jpg"
    },
    { 
        id: 41, 
        name: "Оперативная память Team Group T-Force Delta RGB 32 ГБ", 
        price: 7000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-28800), CL18, 1.35V, 2x16 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/75671ce6a508a9136e30c72dd63fd7a2/44fceccc898b1bceecd27917e3c905801a4c8d9d1cd38767baf311a9c36b09b3.jpg"
    },
    { 
        id: 42, 
        name: "Оперативная память Patriot Viper Steel 16 ГБ", 
        price: 3000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-28800), CL17, 1.35V, 2x8 ГБ, серебристый радиатор",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/61f368a5b539b0a007f7883e4eadafaf/07d1e5633d136d30d85922e291fdf61ac5772e3e4b376034020f485d7ebc30a9.jpg"
    },
    { 
        id: 43, 
        name: "Оперативная память ADATA XPG Spectrix D35G 16 ГБ", 
        price: 3600, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-25600), CL16, 1.35V, 2x8 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/ecf6f90b7419458e42f08d52d62c296f/4cbe26d33932093e1499c0a988bc49c7bb4519f9d6f7340e0dfb15ac85d1412c.png"
    },
    { 
        id: 44, 
        name: "Оперативная память G.Skill Ripjaws V 64 ГБ", 
        price: 14000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-25600), CL16, 1.35V, 2x32 ГБ, черный радиатор",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/304853658826168a2bcb0254e7edd40f/255d17bfa24734988cf567bbc607e81f8b4a35e5ef77e0552f0e10e12596e3ce.jpg"
    },
    { 
        id: 45, 
        name: "Оперативная память Corsair Dominator Platinum RGB 32 ГБ", 
        price: 15000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-28800), CL18, 1.35V, 2x16 ГБ, RGB подсветка, DHX охлаждение",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/9de0b2e35b6967553f3898add9f3e855/6d766b08458e8337559d0f1622f599dadf3005d7cadf809623bab146a8c61fa9.png"
    },
    { 
        id: 46, 
        name: "Оперативная память Kingston HyperX Predator RGB 16 ГБ", 
        price: 12000, 
        category: "Оперативная память",
        specs: "DDR4 4000 МГц (PC4-25600), CL16, 1.35V, 2x8 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1a86886fd9c815076606ccf6372abd34/7d667fd26c45a4ee90cb8adfa18947e5738e7b99f17c83056af936bfe45e7c14.jpg"
    },
    { 
        id: 47, 
        name: "Оперативная память Crucial 32 ГБ", 
        price: 14000, 
        category: "Оперативная память",
        specs: "DDR5 4800 МГц (PC4-32000), CL18, 1.35V, 1x32 ГБ",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/45444d27363ae8b50c58a92194063ea1/3f8ef623bd41c94507e8e4da5c859ae17390cc39fadf47d83bf8f65bd9081262.jpg"
    },
    { 
        id: 48, 
        name: "Оперативная память G.Skill Trident Z Neo RGB 64 ГБ", 
        price: 16000, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-28800), CL16, 1.35V, 4x16 ГБ, RGB подсветка, оптимизировано для AMD",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/ea191b839755e9d3a55b67399b2380b0/c12b58e2541ed2edae464ec13c74ffc078c5261fd4a876eb35f5c5d66b95d822.jpg"
    },

    // Накопители (49-60)
    { 
        id: 49, 
        name: "SSD Samsung 970 EVO Plus 1 ТБ", 
        price: 10000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 3500 МБ/с, запись 3300 МБ/с, 3D NAND TLC, 600 TBW, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/21c589704c69d74d32ab13e18dfb4979/79e29dff7a1be02cb76f512955ce5eb64f2ed56e201ebc9f5cdaeecdeb0ff610.jpg"
    },
    { 
        id: 50, 
        name: "SSD Western Digital Black SN850X 1 ТБ", 
        price: 12000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7300 МБ/с, запись 6300 МБ/с, 3D NAND TLC, 600 TBW, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/d19402867e785ce0c5aea56618e4c932/d55dc42b26160b57765b164ec54704d8fe365f9b6e295e761e3643a005584b10.jpg"
    },
    { 
        id: 51, 
        name: "Жесткий диск Seagate Barracuda 2 ТБ", 
        price: 6500, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 7200 об/мин, кэш 256 МБ, скорость до 220 МБ/с",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/33d77ae6225ba94bf8627e95feab2418/29e26541d1767649daf686170862ce541a2ab1d726299a9335f3a06903c8f9dd.jpg"
    },
    { 
        id: 52, 
        name: "Жесткий диск WD Blue 4 ТБ", 
        price: 9000, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 5400 об/мин, кэш 256 МБ, скорость до 180 МБ/с",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/0a274ea7286575139d6bedbc124e0c5f/0dfe9bd86fb72239e6c602d3fbce2b75919124483d1496b14359010217b547ff.jpg"
    },
    { 
        id: 53, 
        name: "SSD Kingston NV2 1 ТБ", 
        price: 6400, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 3500 МБ/с, запись 2100 МБ/с, 3D NAND TLC, 600 TBW, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c990d13d799a6e9e34409a12884d4d06/a14ce05c127f04e0cf71499c3ebc2099a811bf1b3feda76d4dac3a551bde39b4.jpg"
    },
    { 
        id: 54, 
        name: "SSD Crucial P3 1 ТБ", 
        price: 6700, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 3500 МБ/с, запись 3000 МБ/с, 3D NAND TLC, 600 TBW, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/ab3c7231df85b8ccdb957acca9aa83e9/9447949da2f2268940b144865c373a229d7558e776ee7040cbfce430f31ff398.jpg"
    },
    { 
        id: 55, 
        name: "SSD Samsung 980 Pro 1 ТБ", 
        price: 13000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7000 МБ/с, запись 5000 МБ/с, 3D NAND TLC, 600 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/8cd7cb0dc32fc758dc2a2a64e008d64e/e10159069d1e334d814953ee3fbb8476c84e520c8c80d26bfeaa62ce85ca4b54.jpg"
    },
    { 
        id: 56, 
        name: "Жесткий диск Toshiba P300 3 ТБ", 
        price: 9600, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 7200 об/мин, кэш 64 МБ, скорость до 210 МБ/с",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/41322387ebf690c3ad71585db10c7e3f/efc63530e7ba926951e323f61d2a5e832eb68db4d4c3f1a0c3f05f0528b72774.jpg"
    },
    { 
        id: 57, 
        name: "SSD Silicon Power UD90 1 ТБ", 
        price: 7900, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 5000 МБ/с, запись 4800 МБ/с, 3D NAND TLC, 700 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/20c523a44eff3f3ba1714f35132b4efb/746f888148d37412c244dd0040c847e66b7604bc803318e16b796dc5b0c59524.jpg"
    },
    { 
        id: 58, 
        name: "Жесткий диск Seagate IronWolf 6 ТБ", 
        price: 19000, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 7200 об/мин, кэш 256 МБ, скорость до 210 МБ/с, для NAS",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/dfda6db22c065236dc60d7c261d552bf/fd764009eef074c26c7d2f2a5a25ef9c1a27f9a263bab30429cca7a16d3120a3.jpg"
    },
    { 
        id: 59, 
        name: "SSD Kingston KC3000 1 ТБ", 
        price: 10500, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7000 МБ/с, запись 6000 МБ/с, 3D NAND TLC, 800 TBW, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/a49a069e05af47966130a10efca13c97/1aff906b6a1ff1b8ce05763da72cbf2b71c1697f907ff72c789c0ce7f7063782.jpg"
    },
    { 
        id: 60, 
        name: "Жесткий диск WD Gold 8 ТБ", 
        price: 34500, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 7200 об/мин, кэш 256 МБ, скорость до 249 МБ/с, для серверов",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/855664f386979130513c6bf602e7e496/f4b825db2b31e1297e4a9f10146c270fb6bad7fb034d37b7706d7fd397626aaa.jpg"
    },

    // Блоки питания (61-72)
    { 
        id: 61, 
        name: "Блок питания Corsair RM650x 650 Вт", 
        price: 12000, 
        category: "Блоки питания",
        specs: "650W, 80+ Gold, полностью модульный, 140mm вентилятор, японские конденсаторы, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/87a13160710ceb8d2cd15423b9035eb9/37bab237731d2e47ffc148b7c8b7de77fa1742518467d80754663ffe7f75a20e.jpg"
    },
    { 
        id: 62, 
        name: "Блок питания Be Quiet! Straight Power 11 750 Вт", 
        price: 16700, 
        category: "Блоки питания",
        specs: "750W, 80+ Gold, полностью модульный, 135mm вентилятор, бесшумный, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/168e29b7a8c958904e0e80e9e0355df5/10ef4b4a52294a13ad5e7b556150ac0d14897477aa8f4f78c423c6be094ab4d7.jpg"
    },
    { 
        id: 63, 
        name: "Блок питания EVGA GP-1000", 
        price: 19600, 
        category: "Блоки питания",
        specs: "1000W, 80+ Gold, полностью модульный, 135mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/9ae763471305d8508643faf9b377f5e4/dcf1ba78f9c55ae66314303d3b0f8b98c877f26e1e0c2fb4e421333700a2f434.jpg"
    },
    { 
        id: 64, 
        name: "Блок питания Seasonic B12 BC", 
        price: 11000, 
        category: "Блоки питания",
        specs: "650W, 80+ Bronze, полностью модульный, 120mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/c0198fdb641aa5ac7008f275645b6e21/e92e1e4fc2799d844f3a1147f43303426b38f9537837dcce90c157f6325fa779.jpg"
    },
    { 
        id: 65, 
        name: "Блок питания Thermaltake Toughpower GF1 Snow 850W", 
        price: 14800, 
        category: "Блоки питания",
        specs: "850W, 80+ Gold, полностью модульный, 140mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/e9f0ccc8d530e98fae50a324fff961ad/4bee5920b7f71ff3b2634ffe1682f35dd8d4dd000c73e33dad30bf7cc6c29776.jpg"
    },
    { 
        id: 66, 
        name: "Блок питания Cooler Master MWE Gold 750 V2", 
        price: 12600, 
        category: "Блоки питания",
        specs: "750W, 80+ Gold, полностью модульный, 120mm вентилятор, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/5862a93205722b404c06046bbe4cecb7/b5308e28742f370b26b76b5d595d5a6c54f614cfcaec406a661973053187af3e.jpg"
    },
    { 
        id: 67, 
        name: "Блок питания FSP Hydro G Pro 1000W", 
        price: 22000, 
        category: "Блоки питания",
        specs: "1000W, 80+ Gold, полностью модульный, 140mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c16d986ca9b13810ece64e8bbfab808f/aea149941e6ea2788d321c6f3c18a194bbe4cfce9d0dd234630328810f19e427.jpg"
    },
    { 
        id: 68, 
        name: "Блок питания Chieftec Polaris 850W", 
        price: 14000, 
        category: "Блоки питания",
        specs: "850W, 80+ Gold, полностью модульный, 140mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/043e3e6f3225a94496995464de929a71/890e94f832ff077c85f78fcc3095c613f2576ab1d09c15c0254a110ff7354096.jpg"
    },
    { 
        id: 69, 
        name: "Блок питания ASUS ROG Thor 850W", 
        price: 20000, 
        category: "Блоки питания",
        specs: "850W, 80+ Platinum, полностью модульный, 135mm вентилятор, OLED дисплей, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/9179b72109ba91a9c9ffd0e761306a1a/439a05116e5b33316ece5088f5290b751a36a2cc1c04f61ace450316edebb4b7.jpg"
    },
    { 
        id: 70, 
        name: "Блок питания Silverstone ST1000-PTS", 
        price: 24000, 
        category: "Блоки питания",
        specs: "1000W, 80+ Gold, полностью модульный, 120mm вентилятор, 7 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/200/200/8ac116342c9a23409c6d93aa1efb54d5/abd9ac57c1651b7ee8ef2e897a3eead404b8a5623fee68faf3ddf66bb56d5686.jpg.webp"
    },
    { 
        id: 71, 
        name: "Блок питания Corsair HX1200", 
        price: 20600, 
        category: "Блоки питания",
        specs: "1200W, 80+ Platinum, полностью модульный, 135mm вентилятор, 10 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/4eb588549067650274428a4717a7ed45/307b769785318d8cd264c722a76b1abdb7559a982c2d65355f1d501754e4c4eb.jpg"
    },
    { 
        id: 72, 
        name: "Блок питания Seasonic Prime TX-1000 1000W", 
        price: 30000, 
        category: "Блоки питания",
        specs: "1000W, 80+ Titanium, полностью модульный, 135mm вентилятор, 12 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/22ec90166b0b7bc9bf00f1e92f6073d9/8beae0bdb342aeb7a3a57c6ef04d791fe60c1ca42d107f7599a81812e6201812.jpg"
    },

    // Охлаждение (73-84)
    { 
        id: 73, 
        name: "Кулер для процессора Noctua NH-U12S", 
        price: 4300, 
        category: "Охлаждение",
        specs: "Башенный, 1x120mm вентилятор, TDP до 129W, совместимость: AMD, высота 158mm",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/26d46f77fb8205ff67d21fc5d841da79/c62323b8a3a8ee0eab51a52852fea08ae790afcfdf15520938b1ce3474f2df0e.jpg"
    },
    { 
        id: 74, 
        name: "СВО ASUS ROG STRIX LC II", 
        price: 22000, 
        category: "Охлаждение",
        specs: "280mm радиатор, 2x120mm вентиляторы, совместимость: Intel/AMD",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/52ee1575c17fd03c992d9ed4b1757f51/ce062cd21c87178d03054060d56f1e6e39f4e29eca2f31e6cca0b54816e7ace9.jpg"
    },
    { 
        id: 75, 
        name: "Кулер для процессора Cooler Master Hyper 212 LED", 
        price: 5800, 
        category: "Охлаждение",
        specs: "Башенный, 1x120mm вентилятор, TDP до 150W, совместимость: Intel/AMD, высота 158mm",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/1323d3722ddf2da227b3591074202212/556e0a7f46a82a3631defbfc1a8bc7fe3066b24adf4df6f3810a3f05e26e43a2.jpg"
    },
    { 
        id: 76, 
        name: "СВО Corsair iCUE H150i Elite Capellix", 
        price: 15000, 
        category: "Охлаждение",
        specs: "360mm радиатор, 3x120mm RGB вентиляторы, подсветка Capellix, совместимость: Intel/AMD, помпа с RGB",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3cd105bcfd1f88eedd031526d548c7de/6054fcefce4cc57d30f946d19a40963c547bb77da6f65079348be6ddd82eff1b.png"
    },
    { 
        id: 77, 
        name: "Кулер для процессора Be Quiet! Dark Rock Pro 4", 
        price: 14000, 
        category: "Охлаждение",
        specs: "Башенный, 2x135/120mm вентиляторы, TDP до 250W, совместимость: Intel/AMD, высота 163mm",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/19a3bca3700bdbad6e2a7eb6cced13f2/c39292f659c144c32a0ee2fea29b4c54a46c81fb0681c3104917454f64234a77.jpg"
    },
    { 
        id: 78, 
        name: "СВО Deepcool GAMMAXX L360 A-RGB", 
        price: 9500, 
        category: "Охлаждение",
        specs: "402mm радиатор, 3x120mm RGB вентиляторы, помпа с RGB подсветкой, совместимость: Intel/AMD",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/d6007820b67cae3f855d19dd56b7632f/a0e19463da983510981f18bcbe6c5080c8817298b83aebdfb577bf10caed65fe.jpg"
    },
    { 
        id: 79, 
        name: "Кулер для процессора Arctic Freezer 34 eSports DUO", 
        price: 6600, 
        category: "Охлаждение",
        specs: "Башенный, 2x120mm вентиляторы, TDP до 210W, совместимость: Intel/AMD, высота 157mm",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/560fd956f99437cedfe060a252587100/70367b59e96e08460d28d7e066e5a9b18c2d3394e608c3a44eca58ba13e06f97.jpg"
    },
    { 
        id: 80, 
        name: "СВО lian Li GALAHAD II LITE 360R", 
        price: 9900, 
        category: "Охлаждение",
        specs: "120mm радиатор, 3x120mm RGB вентиляторы, помпа с RGB подсветкой, совместимость: Intel/AMD",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1b14990ac7386b217770584c5ff50963/e59afbba44e51a78f2ce00bec9d1d7b32b2185e8860eba8c48740720cbb3a8ad.jpg"
    },
    { 
        id: 81, 
        name: "Кулер для процессора Thermaltake TOUGHAIR 510 Turquoise", 
        price: 5500, 
        category: "Охлаждение",
        specs: "Башенный, 2x120mm вентиляторы, TDP до 180W, совместимость: Intel/AMD, высота 159.5mm",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/fdc633227ce194ddab570e86c83d0284/6b4d660443c74c8224f74d9673d83903045fa23aa88cedbfc253a26f4f5dab9d.jpg"
    },
    { 
        id: 82, 
        name: "СВО Lian Li Galahad II Trinity 360", 
        price: 15500, 
        category: "Охлаждение",
        specs: "397.5mm радиатор, 3x120mm RGB вентиляторы, помпа с RGB подсветкой, совместимость: Intel/AMD",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/45f22e06f59af42fb7c55620bf64ad9a/77fba36aac4811ab563d6cabc31f07932a2cca0b7cb78f03ee936f89e8721c6e.jpg"
    },
    { 
        id: 83, 
        name: "Кулер для процессора Thermalright Ultra-120 EX", 
        price: 6500, 
        category: "Охлаждение",
        specs: "Башенный, 1x120mm вентиляторы, TDP до 200W, совместимость: Intel/AMD, высота 157mm",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c622932fba68aa2dc6d30a06c8669b56/743c18bfac61db3c19e851c6bc746a6bc3aa56d63586142a266618d83dbdf809.jpg"
    },
    { 
        id: 84, 
        name: "СВО Cooler Master MasterLiquid ML360 MIRROR", 
        price: 14700, 
        category: "Охлаждение",
        specs: "394mm радиатор, 3x120mm вентиляторы, помпа с RGB подсветкой, совместимость: Intel/AMD",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/5c0635e1c9923b06f5651e5f3d4e6712/09f3a6ce28579b3425883ed00ed774c91af8945fd5f52e6d6f9f6a914c079311.png"
    },

    // Корпуса (85-96)
    { 
        id: 85, 
        name: "Корпус NZXT H510i", 
        price: 11600, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 2x120mm вентиляторы (1 в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 7 слотов расширения, USB 3.2 Type-A x2, максимальная длина видеокарты: 381mm, максимальная высота кулера: 165mm",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/029c2f283aaefb41f5fcb9459fce86c0/8a9a15646e90988243a5985ccc3a9a937f677dd6ce095aa4135fbbb750082ae5.jpg"
    },
    { 
        id: 86, 
        name: "Корпус Fractal Design Meshify C BLACK", 
        price: 13500, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 2x120mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 7 слотов расширения, USB 3.0 x2, максимальная длина видеокарты: 315mm, максимальная высота кулера: 172mm, встроенная пылевая фильтрация",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/d5ee1f4c6c274dcc379d5ed22deed32e/f214ba633c58c9b6b0f43be0ff295ee4f15205488b750885c522bea8daa93d7b.jpg"
    },
    { 
        id: 87, 
        name: "Корпус Cooler Master MasterBox MB511 ARGB", 
        price: 12000, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/пластик, 3x120mm RGB вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX/E-ATX, 7 слотов расширения, USB 3.2 x2, максимальная длина видеокарты: 410mm, максимальная высота кулера: 165mm, фронтальная сетчатая панель",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/ff5d174e692c6e9a13de8588cfe177ea/5e10b5a1819388d4f45743bdee50a97682011e56644ab0d612a5af74548602e9.jpg"
    },
    { 
        id: 88, 
        name: "Корпус Lian Li O11 Dynamic EVO XL", 
        price: 25000, 
        category: "Корпуса",
        specs: "Full-Tower, алюминий/сталь/закаленное стекло, поддержка E-ATX/ATX/Micro-ATX/Mini-DTX, 8 слотов расширения, USB 3.2, максимальная длина видеокарты: 460mm, максимальная высота кулера: 167mm, поддержка 360mm радиаторов сверху и снизу",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/bc7513b14846cf53c8e317e3e8d9d2b5/65e7dbd605a81c6298e06dee9cdb4141f4de063cb9240b91d5fe3e7b418e09b5.png"
    },
    { 
        id: 89, 
        name: "Корпус Phanteks Eclipse G400A", 
        price: 16500, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 4x140mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX/E-ATX, 7 слотов расширения, USB 3.2 x2 + Type-C, максимальная длина видеокарты: 415mm, максимальная высота кулера: 184mm, фронтальная сетчатая панель",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/5dbe73337138ff8bc3f1566e8af50882/4216ebfbaca46f3e05c867dab90c3abc0510da82a77025b9cf7f8936f622ec5c.jpg"
    },
    { 
        id: 90, 
        name: "Корпус Corsair iCUE 4000X RGB", 
        price: 15000, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 3x120mm RGB вентиляторы (SP Elite, в комплекте), поддержка ATX/Micro-ATX/Mini-ITX/E-ATX, 7 слотов расширения, USB 3.1 x2 + Type-C, максимальная длина видеокарты: 360mm, максимальная высота кулера: 170mm, контроллер iCUE Lighting Node Core",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/6ea0b3c178226ed14f325339299dd895/e2e946c9bae9a57455a150e417854f20542dda9418880ecaf3ebe7f1cdef5335.png"
    },
    { 
        id: 91, 
        name: "Корпус Thermaltake View 51", 
        price: 22000, 
        category: "Корпуса",
        specs: "Full-Tower, сталь/закаленное стекло (4mm), 2x200mm RGB + 1x120mm вентиляторы (в комплекте), поддержка E-ATX/Micro-ATX/Mini-ITX/ATX, 8 слотов расширения, USB 2.0 x2 + Type-C, максимальная длина видеокарты: 410mm, максимальная высота кулера: 190mm, поддержка 480mm радиатора",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/789865b3c15898b1edfbcca1ad39311b/7b7c3248500026a7c3d6d84195f705d0b5f7a68ef3028d7075b4252932ae1ba3.jpg"
    },
    { 
        id: 92, 
        name: "Корпус Be Quiet! Pure Base 500DX", 
        price: 17400, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 3x140mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 7 слотов расширения, USB 3.0 x2 + Type-C, максимальная длина видеокарты: 369mm, максимальная высота кулера: 190mm, шумоизоляция, ARGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/0b2600293169c81e74235f8e13ee7eee/bbb7b6d781e3f4b113811098e72dddfcd252f5a659fc72667bab9aae3edea766.jpg"
    },
    { 
        id: 93, 
        name: "Корпус DEEPCOOL CG580", 
        price: 6700, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/стекло, 4x120mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 7 слотов расширения, USB 3.2, максимальная длина видеокарты: 410mm, максимальная высота кулера: 176mm",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/0aef85fd89f40bef7b9c33a63c58c395/d7b3445d6b043dbec66b134741c49a69338557839653eda7e946375dd042d424.jpg"
    },
    { 
        id: 94, 
        name: "Корпус Fractal Design Define 7", 
        price: 13000, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/алюминий/закаленное стекло, 2x140mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 9 слотов расширения, USB 3.2 x2 + Type-C, максимальная длина видеокарты: 467mm, максимальная высота кулера: 185mm, модульная конструкция, шумоизоляция",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3f3087bd7b308fc86bc42f7acbb4b68b/df4861322a9b77fd47ea05212b8477fc19e3c6640f004e87293dd07bae54babb.jpg"
    },
    { 
        id: 95, 
        name: "Корпус Lian Li Lancool II Mesh", 
        price: 11000, 
        category: "Корпуса",
        specs: "Mid-Tower, сталь/закаленное стекло, 3x120mm вентиляторы (в комплекте), поддержка ATX/Micro-ATX/Mini-ITX, 7 слотов расширения, USB 3.0 x2 + Type-C, максимальная длина видеокарты: 384mm, максимальная высота кулера: 176mm, съемные пылевые фильтры, вентиляция Mesh",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3dbfe5cb7b8010fca624fac5763ce9a4/a2b4c425f2f6d9455647ad4b5c02594056980b6bc3e667110294c0965f77f4b8.jpg"
    },
    { 
        id: 96, 
        name: "Корпус Phanteks Enthoo Pro 2", 
        price: 22000, 
        category: "Корпуса",
        specs: "Full-Tower Dual Chamber, сталь/алюминий/закаленное стекло, 1x140mm вентилятор (в комплекте), поддержка E-ATX/ATX, 8 слотов расширения, USB 3.0 x2 + Type-C, максимальная длина видеокарты: 500mm, максимальная высота кулера: 190mm, поддержка 480mm радиатора, съемные отсеки",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/4e3217b3a9b80456143d9c8eba5e20c0/598ef4a7598e2d4803ae785fd51bc93d18890775a6013048e8000b811eeba9fb.jpg"
    },

    // Новые процессоры (97-104)
    { 
        id: 97, 
        name: "Процессор Intel Core i5-13600K", 
        price: 28000, 
        category: "Процессоры",
        specs: "14 ядер (6P+8E), 20 потоков, 3.5-5.1 ГГц, LGA 1700, 24 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/b660fa27058677f987ff10430846995d/594b785a5de0d9ef22549e8cd69443182f5a2d1de5c570dc4728c6f9cbf07be6.jpg"
    },
    { 
        id: 98, 
        name: "Процессор AMD Ryzen 7 7700X", 
        price: 32000, 
        category: "Процессоры",
        specs: "8 ядер, 16 потоков, 4.5-5.4 ГГц, AM5, 32 МБ L3, TDP 105W, RDNA 2 Graphics",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/3d3027ef3ecd59d0e6720be82b5e9282/9ee965421d2bbeb3a02dfcbed3fdb6c7a6b0e58b54f59fb10905f2679e8e2e6d.jpg"
    },
    { 
        id: 99, 
        name: "Процессор Intel Core i9-13900K", 
        price: 55000, 
        category: "Процессоры",
        specs: "24 ядра (8P+16E), 32 потока, 3.0-5.8 ГГц, LGA 1700, 36 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/71dc70270fae33c02f72276ab4995410/66e4986f12ca85239f674009ee5bacf714e92c3510d948945d966f14dabf1000.jpg"
    },
    { 
        id: 100, 
        name: "Процессор AMD Ryzen 5 7600X", 
        price: 25000, 
        category: "Процессоры",
        specs: "6 ядер, 12 потоков, 4.7-5.3 ГГц, AM5, 32 МБ L3, TDP 105W, RDNA 2 Graphics",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/afbb57abe5d74e62c945fda8a38017b0/78bcf2918fdf2d1d3e02dde1e9007e03ed747f82bd81c8a595845edcdbf2582d.jpg"
    },
    { 
        id: 101, 
        name: "Процессор Intel Core i7-13700K", 
        price: 38000, 
        category: "Процессоры",
        specs: "16 ядер (8P+8E), 24 потока, 3.4-5.4 ГГц, LGA 1700, 30 МБ кэш, TDP 125W, Intel UHD Graphics 770",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/e04c57f7734afd87b7b9ff0e48a78700/d4c5ac285e704d29542c41df4dd58bfdbea2e26bf597cce45714c6285b2985f4.jpg"
    },
    { 
        id: 102, 
        name: "Процессор AMD Ryzen 9 7900X", 
        price: 45000, 
        category: "Процессоры",
        specs: "12 ядер, 24 потока, 4.7-5.6 ГГц, AM5, 64 МБ L3, TDP 170W, RDNA 2 Graphics",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/076feade9cec44b49a619dad24308be3/8650f24d3ba4df75e3f378043372178fa62fa5db5915fc7ac2d836192c9dffcb.jpg"
    },
    { 
        id: 103, 
        name: "Процессор Intel Core i3-13100F", 
        price: 12000, 
        category: "Процессоры",
        specs: "4 ядра, 8 потоков, 3.4-4.5 ГГц, LGA 1700, 12 МБ кэш, TDP 58W, без графики",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/450ebd0c31dc7d8ed4ca1f8295db58a4/d7d3a698ff5ec63b7fbd11fcff6a511066c313072ac03f85dfa6f0eef42ef4aa.jpg"
    },
    { 
        id: 104, 
        name: "Процессор AMD Ryzen 9 7950X", 
        price: 65000, 
        category: "Процессоры",
        specs: "16 ядер, 32 потока, 4.5-5.7 ГГц, AM5, 64 МБ L3, TDP 170W, RDNA 2 Graphics",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/5d4344a0087c5c5f5fab8e575fd7637c/750fd953f0e3a56b13d3243ef333ab11a810b09e284993a231e1d4eaaa077782.jpg"
    },

    // Новые видеокарты (105-112)
    { 
        id: 105, 
        name: "Видеокарта GIGABYTE GeForce RTX 4080 GAMING OC", 
        price: 115000, 
        category: "Видеокарты",
        specs: "16 ГБ GDDR6X, 9728 ядер CUDA, 2205-2505 МГц, 256 бит, PCIe 4.0, 320W, 3xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/42e2cd23252cfbffcc096e18d204cfdb/53a87f0e42f2f47dfbe596dc8424be5f59deecbca5b44350b4b8a2498682868f.png"
    },
    { 
        id: 106, 
        name: "Видеокарта Sapphire AMD Radeon RX 7900 XT PULSE OC", 
        price:82000, 
        category: "Видеокарты",
        specs: "20 ГБ GDDR6, 5376 потоковых процессоров, 2000-2400 МГц, 320 бит, PCIe 4.0, 300W, 2xDisplayPort, HDMI, USB-C",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/e984f93fc7a16f520b3907708f0acd67/70a4a400d01214d46f0bb74eea0d4efa576487a47d2b5ff2c877a4343fef3d7b.jpg"
    },
    { 
        id: 107, 
        name: "Видеокарта KFA2 GeForce RTX 4070 Ti SUPER", 
        price: 95000, 
        category: "Видеокарты",
        specs: "16 ГБ GDDR6X, 7680 ядер CUDA, 2310-2610 МГц, 256 бит, PCIe 4.0, 285W, 3xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/7f995070bcf4937607fa2b3aa799c1cc/e55b686a870c918b532ddbd5a699978460c894f1a603499d916dfaf191c37aef.jpg"
    },
    { 
        id: 108, 
        name: "Видеокарта  ASUS AMD Radeon RX 7900 GRE DUAL OC", 
        price: 70000, 
        category: "Видеокарты",
        specs: "16 ГБ GDDR6, 3840 потоковых процессоров, 2124-2430 МГц, 256 бит, PCIe 4.0, 263W, 2xDisplayPort, HDMI, USB-C",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/087fbb15204ddc4941b43b2cc55708ff/1d090b6ebd9a9e79ed43625f7a44019b92ec0d4fbfd63b87afa7cfebb4416157.jpg"
    },
    { 
        id: 109, 
        name: "Видеокарта GIGABYTE GeForce RTX 4090 D WINDFORCE", 
        price: 240000, 
        category: "Видеокарты",
        specs: "24 ГБ GDDR6X, 16384 ядер CUDA, 2235-2520 МГц, 384 бит, PCIe 4.0, 450W, 3xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/4b1b77a43cae5560f3776e88a0eefe18/837a40e2fc73cfea81f0714beba8c25b425f3e85e489186ceb6f551ab2acdf7f.jpg"
    },
    { 
        id: 110, 
        name: "Видеокарта GIGABYTE AMD Radeon RX 7900 XTX GAMING OC", 
        price: 123000, 
        category: "Видеокарты",
        specs: "24 ГБ GDDR6, 3456 потоковых процессоров, 2171-2544 МГц, 384 бит, PCIe 4.0, 245W, 2xDisplayPort, HDMI, USB-C",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/c29fc17bedf1b723ed58ef71ea0e9e94/3e70a4fc1317ce0d9ff5886e5afe8e41962baa0d9c48809b7b67ce2539d61457.png"
    },
    { 
        id: 111, 
        name: "Видеокарта GIGABYTE GeForce RTX 2060 ", 
        price: 27000, 
        category: "Видеокарты",
        specs: "6 ГБ GDDR6, 4352 ядер CUDA, 1365-2535 МГц, 192 бит, PCIe 4.0, 160W, 3xDisplayPort, HDMI",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3aa43dc039c7383f5a62decf61d8b043/ed8908fa18e8e6621fa6524a3a11ecbfa1ca3517a2e98720f7b458c6583c041f.jpg"
    },
    { 
        id: 112, 
        name: "Видеокарта PowerColor AMD Radeon RX 7600 Fighter", 
        price: 28000, 
        category: "Видеокарты",
        specs: "8 ГБ GDDR6, 2048 потоковых процессоров, 1720-2655 МГц, 128 бит, PCIe 4.0, 165W, 2xDisplayPort, HDMI, USB-C",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3fa99bdbf43a4f5505c1584519d5e939/2d3d5427c1c2ef9da03d095ebf6eb4d316f39bfe634c8f04bd649fd828803800.jpg"
    },

    // Новые материнские платы (113-120)
    { 
        id: 113, 
        name: "Материнская плата ASUS ROG Strix Z790-F Gaming WiFi",
        price: 41990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z790, DDR5 до 7800 МГц, 5xM.2, WiFi 6E, 10G LAN, USB4, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/98ed523ec485fd6b1c2860070abd236e/15e60b0fef7890b9d9ec61930d0001d6b699ce52da1e27629da20e848b74e70d.jpg"
    },
    { 
        id: 114, 
        name: "Материнская плата MSI MAG B650 Tomahawk WiFi",
        price: 22990,
        category: "Материнские платы",
        specs: "AM5, AMD B650, DDR5 до 6400 МГц, 2xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/b17ff8963c3779d986968d38816ae639/929188b9cee5dda3cfd0a45ddb1eb92039478e518c550990f0a81044ab256413.jpg"
    },
    { 
        id: 115, 
        name: "Материнская плата Gigabyte X670 AORUS ELITE AX",
        price: 28990,
        category: "Материнские платы",
        specs: "AM5, AMD X670, DDR5 до 6200 МГц, 4xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/91c0e72147abede9809a6cae3983032b/0b13f1dcf412bafa9a2de8d78d130a81d9fc4b8338a7e0ac03d9fc6660bff896.jpg"
    },
    { 
        id: 116, 
        name: "Материнская плата ASRock Z790 Steel Legend WiFi",
        price: 28990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z790, DDR5 до 7200 МГц, 4xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/c2cd57906b21387586e2f115cef608b2/a4a1a8e7b3715b30403ee5d0b2bc94f4531ffc50e3fb5a54a7377e1d2681b688.png"
    },
    { 
        id: 117, 
        name: "Материнская плата ASUS TUF GAMING X670E-PLUS WIFI",
        price: 31990,
        category: "Материнские платы",
        specs: "AM5, AMD X670E, DDR5 до 6400 МГц, 4xM.2, WiFi 6, 2.5G LAN, USB 3.2 Gen 2x2, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1fd0b562dfaab1a9c7b104889c17d6eb/8df559800ac6a6efe10b01c622b20984d86bd9539dfca3be48f5ada4291d81db.jpg"
    },
    { 
        id: 118, 
        name: "Материнская плата MSI MPG Z790 CARBON WIFI",
        price: 42990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel Z790, DDR5 до 7200 МГц, 5xM.2, WiFi 6E, 10G LAN, USB 3.2 Gen 2x2, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/b0b9d06837c0c1576faca64cc6b38327/2b3d9e625141f96b3fba4a26ae3e5c1496ec4049369b2a5a8940dc75cd39c1d0.jpg"
    },
    { 
        id: 119, 
        name: "Материнская плата Gigabyte B760 AORUS PRO AX",
        price: 18990,
        category: "Материнские платы",
        specs: "LGA 1700, Intel B760, DDR5 до 7600 МГц, 3xM.2, WiFi 6E, 2.5G LAN, USB 3.2 Gen 2x2, ARGB",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/91e897dba2e4dd1b379df95a755b3f47/74f13c65b29eeb28dc9707a70d223bb91142b2e6589e6d270cd0844437f82b8a.jpg"
    },
    { 
        id: 120, 
        name: "Материнская плата ASRock B650M PG Riptide",
        price: 14990,
        category: "Материнские платы",
        specs: "AM5, AMD B650, DDR5 до 6400 МГц, 2xM.2, 1G LAN, USB 3.2 Gen 1, microATX",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/4ff61cb871d73df37969ea16117d7666/ce5ec4264862031b7ca504f09ee0c4a4f521e8c67ee12c985332750421e130ae.jpg"
    },

    // Новая оперативная память (121-128)
    { 
        id: 121, 
        name: "Оперативная память Corsair Dominator Platinum RGB 64 ГБ", 
        price: 30000, 
        category: "Оперативная память",
        specs: "DDR5 5200 МГц (PC5-44800), CL36, 1.25V, 2x32 ГБ, RGB подсветка, DHX охлаждение",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1580c6adf8897ca845b387243d0d60f8/9f4b61fdddc9f2878f20762b4f89c897560aa3491a6608cc6ca38657b012ee93.png"
    },
    { 
        id: 122, 
        name: "Оперативная память G.Skill Trident Z5 RGB 32 ГБ", 
        price: 12000, 
        category: "Оперативная память",
        specs: "DDR5 6000 МГц (PC5-48000), CL36, 1.35V, 2x16 ГБ, RGB подсветка, оптимизировано для Intel",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/c338f458f1b1390090310805225520dc/09135fcdadef4e867b6e5cbb740e35967c02f0ef92605a62684b9a5a13c2037f.png"
    },
    { 
        id: 123, 
        name: "Оперативная память Kingston Fury Beast 16 ГБ", 
        price: 5400, 
        category: "Оперативная память",
        specs: "DDR5 5200 МГц (PC5-41600), CL40, 1.25V, 1x16 ГБ, черный радиатор",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/c68c5a476129b57adff95adcecd34b5a/e5099b9d6dba73ffc7a69d1988b47b3381da4b4652b59cd359cf317e788439db.jpg"
    },
    { 
        id: 124, 
        name: "Оперативная память Crucial DDR5 4800 32 ГБ", 
        price: 8700, 
        category: "Оперативная память",
        specs: "DDR5 4800 МГц (PC5-38400), CL40, 1.1V, 2x16 ГБ, без радиатора",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/45444d27363ae8b50c58a92194063ea1/3f8ef623bd41c94507e8e4da5c859ae17390cc39fadf47d83bf8f65bd9081262.jpg"
    },
    { 
        id: 125, 
        name: "Оперативная память Team Group T-Force Delta RGB 64 ГБ", 
        price: 21000, 
        category: "Оперативная память",
        specs: "DDR5 6000 МГц (PC5-48000), CL38, 1.35V, 2x32 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/72aa30146f52161cca21281976fae333/482fdf932ae6494bd241fa433b5bc39a949ba5e5caba8076325c1661deccae61.jpg"
    },
    { 
        id: 126, 
        name: "Оперативная память Patriot Viper Steel 32 ГБ", 
        price: 6400, 
        category: "Оперативная память",
        specs: "DDR4 3200 МГц (PC4-35200), CL19, 1.45V, 2x16 ГБ, серебристый радиатор",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/d9ff3c29c7d0027a65c3b65662a12701/a5bb27c1d1a6586fa0f0a272cd584fce0a2287a8c725261ffadfadba4b1aa1a2.jpg"
    },
    { 
        id: 127, 
        name: "Оперативная память ADATA XPG Lancer BLADE RGB 32 ГБ", 
        price: 11500, 
        category: "Оперативная память",
        specs: "DDR5 6000 МГц (PC5-48000), CL40, 1.35V, 2x16 ГБ, RGB подсветка",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/f752ce03c89deb71777b92011291aead/2acfe3f6dc3849684b2861755930169d807b321a731939c245a07260f8151b53.png"
    },
    { 
        id: 128, 
        name: "Оперативная память G.Skill Ripjaws S5 48 ГБ", 
        price: 22000, 
        category: "Оперативная память",
        specs: "DDR5 5600 МГц (PC5-44800), CL36, 1.25V, 2x24 ГБ, черный радиатор",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/8a43a4ba38f17966812fea4fe6aeba92/880a36060260ab175a50ea9bc2451be9fd935d1a72579f2551a5961c446b680e.jpg"
    },

    // Новые накопители (129-136)
    { 
        id: 129, 
        name: "SSD Samsung 990 Pro 2 ТБ", 
        price: 23000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7450 МБ/с, запись 6900 МБ/с, 3D NAND TLC, 1200 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/1fc468875c9c9bc599bc1586bf8b9f54/3fd7182e58e1fb721fc6e3c1bbfa0cab370e02673dc24870a35ec6cde19c2f26.jpg"
    },
    { 
        id: 130, 
        name: "SSD Kingston KC3000 2 ТБ", 
        price: 16700, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7000 МБ/с, запись 7000 МБ/с, 3D NAND TLC, 1600 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/c62a1e1a6a4fb16b16df368ce28b5833/ce39aff9e3e966b7ded5c0275bcfc09209d57c1e368d3652c6fa99d8dd42c82a.jpg"
    },
    { 
        id: 131, 
        name: "Жесткий диск Seagate IronWolf Pro 12 ТБ", 
        price: 39800, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 7200 об/мин, кэш 256 МБ, скорость до 250 МБ/с, для NAS, 5 лет гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/31c8715348cd6edb471d106fc46e283d/491f0c6e90b576541a7f85cf613ea3e60ad04ec398be7afdc9bc163d774f7c9a.jpg"
    },
    { 
        id: 132, 
        name: "SSD WD Black SN850X 2 ТБ", 
        price: 24000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7300 МБ/с, запись 6600 МБ/с, 3D NAND TLC, 1200 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/5d74fd99abe341fe1da98e28a21cf836/31118aad863755261adf2ad383ff5431fe85c2c816ec98d91867d0b1cdf4223a.jpg"
    },
    { 
        id: 133, 
        name: "SSD Crucial T700 2 ТБ", 
        price: 42000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 12400 МБ/с, запись 11800 МБ/с, 3D NAND TLC, 1200 TBW, 5 лет гарантии, PCIe 5.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/8b98516e128cab21cd109aa802951f2c/f39cc0e725600d98d074ef3ac99be0a63480fa3d7946031e94a4a2c214d72ec8.jpg"
    },
    { 
        id: 134, 
        name: "Жесткий диск WD Red Plus 8 ТБ", 
        price: 24000, 
        category: "Накопители",
        specs: "3.5\", SATA 6 Гбит/с, 5640 об/мин, кэш 256 МБ, скорость до 210 МБ/с, для NAS, 3 года гарантии",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/3952e08a903b51af96fb3fed473ce40e/29f930d1ff9903083d35405d9cc1509ee4503d2b073c36d94ab47f1cd21b11f6.jpg"
    },
    { 
        id: 135, 
        name: "SSD Kingston FURY Renegade 2 ТБ", 
        price: 16700, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7300 МБ/с, запись 7000 МБ/с, 3D NAND TLC, 2000 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st4/fit/320/250/5609673e238a3815f27ad1dd51c29878/5057d83cabe3884e90c45c701f87ddb910bc22eae3c2c14d394cdeab5914c8a3.jpg"
    },
    { 
        id: 136, 
        name: "SSD Silicon Power US75 2 ТБ", 
        price: 15000, 
        category: "Накопители",
        specs: "M.2 NVMe, чтение 7000 МБ/с, запись 6500 МБ/с, 3D NAND TLC, 1200 TBW, 5 лет гарантии, PCIe 4.0",
        image: "https://c.dns-shop.ru/thumb/st1/fit/320/250/ff73d268254bf52afaa98fbfa3dafb37/d12a072acd01ae2d875088fe78938262f1c1085b74be55be6bd288ca9b1732f5.jpg"
    }
];
