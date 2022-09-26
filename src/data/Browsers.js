const data = [
    {
      code: 'Trident', name: 'Internet Explorer 4.0', phone:'', dni: 'Win 95+', city: ' 4', status: 'Inactivo',qualification: '0',
    },
    {
      code: 'Trident', name: 'Internet Explorer 5.0', phone:'', dni: 'Win 95+', city: '5', status: 'Inactivo',qualification: '0',
    },
    {
      code: 'Trident', name: 'Internet Explorer 5.5', phone:'', dni: 'Win 95+', city: '5.5', status: 'Activo',qualification: '1',
    },
    {
      code: 'Trident', name: 'Internet Explorer 6', phone:'', dni: 'Win 98+', city: '6', status: 'Activo',qualification: '1',
    },
    {
      code: 'Trident', name: 'Internet Explorer 7', phone:'', dni: 'Win XP SP2+', city: '7', status: 'Activo',qualification: '1',
    },
    {
      code: 'Trident', name: 'AOL browser (AOL desktop)', phone:'', dni: 'Win XP', city: '6', status: 'Activo',qualification: '1',
    },
    {
      code: 'Gecko', name: 'Firefox 1.0', phone:'', dni: 'Win 98+ / OSX.2+', city: '1.7', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Firefox 1.5', phone:'', dni: 'Win 98+ / OSX.2+', city: '1.8', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Firefox 2.0', phone:'', dni: 'Win 98+ / OSX.2+', city: '1.8', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Firefox 3.0', phone:'', dni: 'Win 2k+ / OSX.3+', city: '1.9', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Camino 1.0', phone:'', dni: 'OSX.2+', city: '1.8', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Camino 1.5', phone:'', dni: 'OSX.3+', city: '1.8', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Netscape 7.2', phone:'', dni: 'Win 95+ / Mac OS 8.6-9.2', city: '1.7', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Netscape Browser 8', phone:'', dni: 'Win 98SE+', city: '1.7', status: 'Activo',qualification: '2',
    },
    {
      code: 'Gecko', name: 'Netscape Navigator 9', phone:'', dni: 'Win 98+ / OSX.2+', city: '1.8', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.0', phone:'', dni: 'Win 95+ / OSX.1+', city: '1', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.1', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.1', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.2', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.2', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.3', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.3', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.4', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.4', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.5', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.5', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.6', phone:'', dni: 'Win 95+ / OSX.1+', city: '1.6', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.7', phone:'', dni: 'Win 98+ / OSX.1+', city: '1.7', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Mozilla 1.8', phone:'', dni: 'Win 98+ / OSX.1+', city: '1.8', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Seamonkey 1.1', phone:'', dni: 'Win 98+ / OSX.2+', city: '1.8', status: 'Activo',qualification: '3',
    },
    {
      code: 'Gecko', name: 'Epiphany 2.20', phone:'', dni: 'Gnome', city: '1.8', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'Safari 1.2', phone:'', dni: 'OSX.3', city: '125.5', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'Safari 1.3', phone:'', dni: 'OSX.3', city: '312.8', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'Safari 2.0', phone:'', dni: 'OSX.4+', city: '419.3', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'Safari 3.0', phone:'', dni: 'OSX.4+', city: '522.1', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'OmniWeb 5.5', phone:'', dni: 'OSX.4+', city: '420', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'iPod Touch / iPhone', phone:'', dni: 'iPod', city: '420.1', status: 'Activo',qualification: '3',
    },
    {
      code: 'Webkit', name: 'S60', phone:'', dni: 'S60', city: '413', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 7.0', phone:'', dni: 'Win 95+ / OSX.1+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 7.5', phone:'', dni: 'Win 95+ / OSX.2+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 8.0', phone:'', dni: 'Win 95+ / OSX.2+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 8.5', phone:'', dni: 'Win 95+ / OSX.2+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 9.0', phone:'', dni: 'Win 95+ / OSX.3+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 9.2', phone:'', dni: 'Win 88+ / OSX.3+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera 9.5', phone:'', dni: 'Win 88+ / OSX.3+', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Opera for Wii', phone:'', dni: 'Wii', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Nokia N800', phone:'', dni: 'N800', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Presto', name: 'Nintendo DS browser', phone:'', dni: 'Nintendo DS', city: '8.5', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'KHTML', name: 'Konqureror 3.1', phone:'', dni: 'KDE 3.1', city: '3.1', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'KHTML', name: 'Konqureror 3.3', phone:'', dni: 'KDE 3.3', city: '3.3', status: 'Activo',qualification: '3',
    },
    {
      code: 'KHTML', name: 'Konqureror 3.5', phone:'', dni: 'KDE 3.5', city: '3.5', status: 'Activo',qualification: '3',
    },
    {
      code: 'Tasman', name: 'Internet Explorer 4.5', phone:'', dni: 'Mac OS 8-9', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Tasman', name: 'Internet Explorer 5.1', phone:'', dni: 'Mac OS 7.6-9', city: '1', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Tasman', name: 'Internet Explorer 5.2', phone:'', dni: 'Mac OS 8-X', city: '1', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'NetFront 3.1', phone:'', dni: 'Embedded devices', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'NetFront 3.4', phone:'', dni: 'Embedded devices', city: '-', status: 'Activo',qualification: '3',
    },
    {
      code: 'Misc', name: 'Dillo 0.8', phone:'', dni: 'Embedded devices', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'Links', phone:'', dni: 'Text only', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'Lynx', phone:'', dni: 'Text only', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'IE Mobile', phone:'', dni: 'Windows Mobile 6', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Misc', name: 'PSP browser', phone:'', dni: 'PSP', city: '-', status: 'Inactivo',qualification: '3',
    },
    {
      code: 'Other browsers', name: 'All others', phone:'', dni: '-', city: '-', status: 'Inactivo',qualification: '3',
    },
  ];
  
  export default data;