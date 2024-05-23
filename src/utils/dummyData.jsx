import netflix from '../assets/brands/netflix.png';
import prime from '../assets/brands/prime.png';
import spotify from '../assets/brands/spotify.png';
import chatgpt from '../assets/brands/ChatGPT_logo.svg.png';
import midjourny from '../assets/brands/midjourny.png.png';
import dalle from '../assets/brands/dalle.png';
import bard from '../assets/brands/Google_Bard_logo.svg';
import drive from '../assets/brands/drive.png';
import office from '../assets/brands/Microsoft_Office.svg.png';
import icloud from '../assets/brands/ICloud_logo.svg.png';

export const allsubs = [
	{ name: 'ChatGPT 4', img: 'https://i.ibb.co/qFRWQcf/Chat-GPT-logo-svg.png', validity: 'Lifetime', category: 'ai', featured: true },
	{ name: 'Mid-Journey', img: 'https://i.ibb.co/1m0pMvt/midjourny-png.png', validity: '1 Year', category: 'ai', featured: true },
	{ name: 'Google BardAI', img: 'https://i.ibb.co/VT35gZ5/bard.png', validity: '1 Month', category: 'ai' },
	{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
	{ name: 'ChatSonic', img: 'https://i.ibb.co/sQFVR13/chatsonic.jpg', validity: '1 Month', category: 'ai' },
	{ name: 'SlideAI', img: 'https://i.ibb.co/rp1rrFY/SlidesAI.png', validity: '1 Month', category: 'ai' },
	{ name: 'Netflix', img: 'https://i.ibb.co/gTy5vJY/netflix.png', validity: 'Lifetime', category: 'ott', featured: true },
	{ name: 'Prime Videos', img: 'https://i.ibb.co/6YfB7Rw/prime.png', validity: '1 Year', category: 'ott', featured: true },
	{ name: 'Disney Plus', img: 'https://i.ibb.co/gW4Npty/disney.png', validity: '1 Month', category: 'ott' },
	{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
	{ name: 'ESPN+', img: 'https://i.ibb.co/F4JCzzG/espn.jpg', validity: '1 Month', category: 'ott' },
	{ name: 'HBO Max', img: 'https://i.ibb.co/mbFYn3s/HBOm.jpg', validity: '1 Year', category: 'ott' },
	{ name: 'CapCut', img: 'https://i.ibb.co/j5KtfT5/capcut.jpg', validity: 'Lifetime', category: 'video-editor' },
	{ name: 'KineMaster', img: 'https://i.ibb.co/YPgxkvZ/kinemaster.jpg', validity: '1 Year', category: 'video-editor' },
	{ name: 'Filmora', img: 'https://i.ibb.co/fFRTNQd/Filomora.png', validity: '1 Month', category: 'video-editor' },
	{ name: 'Premer Pro', img: 'https://i.ibb.co/jvgKrXD/Adobe-Premiere-Pro-CC-icon-svg.png', validity: '3 Month', category: 'video-editor', featured: true },
	{ name: 'ClipChamp', img: 'https://i.ibb.co/prmypp8/clipchamp.jpg', validity: '1 Year', category: 'video-editor' },
	{ name: 'Auto3ds Max', img: 'https://i.ibb.co/7pRwXS4/Auto.jpg', validity: '1 Year', category: '3d' },
	{ name: 'Blender', img: 'https://i.ibb.co/wNfwc5s/blender.png', validity: '1 Year', category: '3d', featured: true },
	{ name: 'Zoom', img: 'https://i.ibb.co/g946Y65/zoom.jpg', validity: '1 Month', category: '3d' },
	{ name: 'Maya', img: 'https://i.ibb.co/RS5RP7n/maya.png', validity: '1 Month', category: '3d', featured: true },
	{ name: 'SketchUp', img: 'https://i.ibb.co/2Whcy34/sketchup.png', validity: '3 Month', category: '3d' },
	{ name: 'ZBrush', img: 'https://i.ibb.co/z44sR3t/ZBrush.png', validity: '1 Year', category: '3d' },
	{ name: 'HootSuite', img: 'https://i.ibb.co/nwnCgqL/Hootsuite.jpg', validity: '1 Year', category: 'office' },
	{ name: 'Microsoft Teams', img: 'https://i.ibb.co/CVVrNZ2/Microsoft-Teams.png', validity: '1 Year', category: 'office' },
	{ name: 'Zoom', img: 'https://i.ibb.co/g946Y65/zoom.jpg', validity: '1 Month', category: 'office' },
	{ name: 'Miro', img: 'https://i.ibb.co/Y0Fcp9D/Miro.png', validity: '1 Month', category: 'office' },
	{ name: 'DropBox', img: 'https://i.ibb.co/Xzn8v1M/dropbox.png', validity: '3 Month', category: 'office' },
	{ name: 'MicroSoft Team', img: 'https://i.ibb.co/CVVrNZ2/Microsoft-Teams.png', validity: '1 Year', category: 'office' },
	{ name: 'Adobe Photoshop', img: 'https://i.ibb.co/6tJDnx9/adobe.jpg', validity: '1 Year', category: 'photo-editor' },
	{ name: 'Dx0', img: 'https://i.ibb.co/vBHWCgh/dx0.jpg', validity: '1 Year', category: 'photo-editor' },
	{ name: 'Photopea', img: 'https://i.ibb.co/3ybbsqL/Photopea-logo-svg.png', validity: '1 Month', category: 'photo-editor' },
	{ name: 'Capture One Pro', img: 'https://i.ibb.co/PwNbfm3/one.png', validity: '1 Month', category: 'photo-editor' },
	{ name: 'Canva', img: 'https://i.ibb.co/FzTWzm3/Canva-logo.png', validity: '1 Month', category: 'photo-editor', featured: true },
	{ name: 'SkyLum', img: 'https://i.ibb.co/fSh0gK0/skylum.jpg', validity: '3 Month', category: 'photo-editor' },
	{ name: 'CyberLink Powerdirector', img: 'https://i.ibb.co/RYmWc9n/Power-Director-logo.png', validity: '1 Year', category: 'photo-editor' },
	{ name: 'MongoDB', img: 'https://i.ibb.co/rZtTzxK/MongoDb.png', validity: '1 Year', category: 'db' },
	{ name: 'MariaDB', img: 'https://i.ibb.co/xqqzjSP/MariaDB.png', validity: '1 Year', category: 'db' },
	{ name: 'Oracle', img: 'https://i.ibb.co/TkmCh80/oracler.jpg', validity: '1 Month', category: 'db' },
	{ name: 'FileMaker', img: 'https://i.ibb.co/NYpXPv6/Filemaker.png', validity: '1 Month', category: 'db' },
	{ name: 'OrientDB', img: 'https://i.ibb.co/DGYZ48d/orientdb.jpg', validity: '3 Month', category: 'db' },
	{ name: 'CouchDB', img: 'https://i.ibb.co/HN1bnh3/couchdb-vertical-logo.png', validity: '1 Year', category: 'db' },
];

export const featuredPacks = [
	{
		id: '24H38J',
		name: 'AI Bundle',
		price: '$15.6',
		subs: [
			{ name: 'ChatGPT 4', img: 'https://i.ibb.co/qFRWQcf/Chat-GPT-logo-svg.png', validity: 'Lifetime', category: 'ai', featured: true },
			{ name: 'Mid-Journey', img: 'https://i.ibb.co/1m0pMvt/midjourny-png.png', validity: '1 Year', category: 'ai', featured: true },
			{ name: 'Google BardAI', img: 'https://i.ibb.co/VT35gZ5/bard.png', validity: '1 Month', category: 'ai' },
			{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
		],
	},
	{
		id: '34B38J',
		name: 'Entertainment',
		price: '$25.00',
		subs: [
			{ name: 'Netflix', img: 'https://i.ibb.co/gTy5vJY/netflix.png', validity: 'Lifetime', category: 'ott', featured: true },
			{ name: 'Prime Videos', img: 'https://i.ibb.co/6YfB7Rw/prime.png', validity: '1 Year', category: 'ott', featured: true },
			{ name: 'Disney Plus', img: 'https://i.ibb.co/gW4Npty/disney.png', validity: '1 Month', category: 'ott' },
			{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
		],
	},
	{
		id: '56J38J',
		name: 'Productive Bundle',
		price: '$15.00',
		subs: [
			{ name: 'Microsoft Teams', img: 'https://i.ibb.co/CVVrNZ2/Microsoft-Teams.png', validity: '1 Year', category: 'office' },
			{ name: 'Zoom', img: 'https://i.ibb.co/g946Y65/zoom.jpg', validity: '1 Month', category: 'office' },
			{ name: 'DropBox', img: 'https://i.ibb.co/Xzn8v1M/dropbox.png', validity: '3 Month', category: 'office' },
			{ name: 'Adobe Photoshop', img: 'https://i.ibb.co/7pRwXS4/Auto.jpg', validity: '1 Year', category: 'photo-editor' },
		],
	},
	{
		id: '74I90T',
		name: 'Videographer Bundle',
		price: '$25.00',
		subs: [
			{ name: 'CapCut', img: 'https://i.ibb.co/j5KtfT5/capcut.jpg', validity: 'Lifetime', category: 'video-editor' },
			{ name: 'KineMaster', img: 'https://i.ibb.co/YPgxkvZ/kinemaster.jpg', validity: '1 Year', category: 'video-editor' },
			{ name: 'Filmora', img: 'https://i.ibb.co/fFRTNQd/Filomora.png', validity: '1 Month', category: 'video-editor' },
			{ name: 'Premer Pro', img: 'https://i.ibb.co/jvgKrXD/Adobe-Premiere-Pro-CC-icon-svg.png', validity: '3 Month', category: 'video-editor', featured: true },
		],
	},
	// {
	// 	id: '55J38J',
	// 	name: 'Photo Editor Bundle',
	// 	price: '$15.65',
	// 	subs: [
	// 		{ name: 'Photopea', img: 'https://i.ibb.co/3ybbsqL/Photopea-logo-svg.png', validity: '1 Month', category: 'photo-editor' },
	// 		{ name: 'Capture One Pro', img: 'https://i.ibb.co/PwNbfm3/one.png', validity: '1 Month', category: 'photo-editor' },
	// 		{ name: 'Canva', img: 'https://i.ibb.co/FzTWzm3/Canva-logo.png', validity: '1 Month', category: 'photo-editor', featured: true },
	// 		{ name: 'CyberLink Powerdirector', img: 'https://i.ibb.co/RYmWc9n/Power-Director-logo.png', validity: '1 Year', category: 'photo-editor' },
	// 	],
	// },
];

export const aiTools = [
	{
		id: '56J38J',
		name: 'Future Tools',
		price: '$15.6',
		subs: [
			{ name: 'Google BardAI', img: 'https://i.ibb.co/VT35gZ5/bard.png', validity: '1 Month', category: 'ai' },
			{ name: 'Mid-Journey', img: 'https://i.ibb.co/1m0pMvt/midjourny-png.png', validity: '1 Year', category: 'ai', featured: true },
			{ name: 'ChatGPT 4', img: 'https://i.ibb.co/qFRWQcf/Chat-GPT-logo-svg.png', validity: 'Lifetime', category: 'ai', featured: true },
			{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
		],
	},
	{
		id: '34B38J',
		name: 'Innovation Kit',
		price: '$25.00',
		subs: [
			{ name: 'Mid-Journey', img: 'https://i.ibb.co/1m0pMvt/midjourny-png.png', validity: '1 Year', category: 'ai', featured: true },
			{ name: 'ChatSonic', img: 'https://i.ibb.co/sQFVR13/chatsonic.jpg', validity: '1 Month', category: 'ai' },
			{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
			{ name: 'SlideAI', img: 'https://i.ibb.co/rp1rrFY/SlidesAI.png', validity: '1 Month', category: 'ai' },
		],
	},
	{
		id: '74I90T',
		name: 'Tech Pack',
		price: '$15.65',
		subs: [
			{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
			{ name: 'SlideAI', img: 'https://i.ibb.co/rp1rrFY/SlidesAI.png', validity: '1 Month', category: 'ai' },
			{ name: 'ChatGPT 4', img: 'https://i.ibb.co/qFRWQcf/Chat-GPT-logo-svg.png', validity: 'Lifetime', category: 'ai', featured: true },
			{ name: 'ChatSonic', img: 'https://i.ibb.co/sQFVR13/chatsonic.jpg', validity: '1 Month', category: 'ai' },
		],
	},
	{
		id: '55J38J',
		name: 'Digital Suite',
		price: '$25.00',
		subs: [
			{ name: 'Mid-Journey', img: 'https://i.ibb.co/1m0pMvt/midjourny-png.png', validity: '1 Year', category: 'ai', featured: true },
			{ name: 'Dall-E-3', img: 'https://i.ibb.co/jzgTJBQ/dalle.png', validity: '1 Month', category: 'ai' },
			{ name: 'ChatGPT 4', img: 'https://i.ibb.co/qFRWQcf/Chat-GPT-logo-svg.png', validity: 'Lifetime', category: 'ai', featured: true },
			{ name: 'SlideAI', img: 'https://i.ibb.co/rp1rrFY/SlidesAI.png', validity: '1 Month', category: 'ai' },
		],
	},
];

export const moviesAndTV = [
	{
		id: '54B38J',
		name: 'Super Entertainment',
		price: '$25.00',
		subs: [
			{ name: 'Netflix', img: 'https://i.ibb.co/gTy5vJY/netflix.png', validity: 'Lifetime', category: 'ott', featured: true },
			{ name: 'Prime Videos', img: 'https://i.ibb.co/6YfB7Rw/prime.png', validity: '1 Year', category: 'ott', featured: true },
			{ name: 'Disney Plus', img: 'https://i.ibb.co/gW4Npty/disney.png', validity: '1 Month', category: 'ott' },
			{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
		],
	},
	{
		id: '8788J',
		name: 'Chill Pack',
		price: '$25.00',
		subs: [
			{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
			{ name: 'ESPN+', img: 'https://i.ibb.co/F4JCzzG/espn.jpg', validity: '1 Month', category: 'ott' },
			{ name: 'HBO Max', img: 'https://i.ibb.co/mbFYn3s/HBOm.jpg', validity: '1 Year', category: 'ott' },
			{ name: 'Prime Videos', img: 'https://i.ibb.co/6YfB7Rw/prime.png', validity: '1 Year', category: 'ott', featured: true },
		],
	},
	{
		id: '34By7',
		name: 'All in one',
		price: '$25.00',
		subs: [
			{ name: 'Disney Plus', img: 'https://i.ibb.co/gW4Npty/disney.png', validity: '1 Month', category: 'ott' },
			{ name: 'HBO Max', img: 'https://i.ibb.co/mbFYn3s/HBOm.jpg', validity: '1 Year', category: 'ott' },
			{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
			{ name: 'ESPN+', img: 'https://i.ibb.co/F4JCzzG/espn.jpg', validity: '1 Month', category: 'ott' },
		],
	},
	{
		id: '76738J',
		name: 'Lifetime Entertainer',
		price: '$25.00',
		subs: [
			{ name: 'HBO Max', img: 'https://i.ibb.co/mbFYn3s/HBOm.jpg', validity: '1 Year', category: 'ott' },
			{ name: 'Hulu', img: 'https://i.ibb.co/qd8cdZ3/Hulu.png', validity: '1 Month', category: 'ott' },
			{ name: 'ESPN+', img: 'https://i.ibb.co/F4JCzzG/espn.jpg', validity: '1 Month', category: 'ott' },
			{ name: 'Disney Plus', img: 'https://i.ibb.co/gW4Npty/disney.png', validity: '1 Month', category: 'ott' },
		],
	},
];

export const MyPacks = [
	{
		name: 'Super OTT',
		subs: [
			{ name: 'Netflix', img: netflix, link: 'https://www.netflix.com/login' },
			{ name: 'Prime Videos', img: prime, link: 'https://www.primevideo.com/detail/Login/0HBWDH95AN3UG2SX0M4YXRQ80W' },
			{ name: 'Spotify', img: spotify, link: 'https://accounts.spotify.com/en/login' },
		],
		price: 23.43,
	},
	{
		name: 'Big AI',
		subs: [
			{
				name: 'Chat GPT 4o',
				img: chatgpt,
				link: 'https://auth0.openai.com/u/login/identifier?state=hKFo2SB5ZFEyNjJnZ3FIY0liV0ZGSTVXcW8zbkJhN1NGbU5qX6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHdnVnl5YUFpdVdjWnRPYzhfRVp6YV8xVzFRQlhtSmp1o2NpZNkgRE1nOTFmNVBDSFF0Yzd1MDE4V0tpTDB6b3BLZGlIbGU',
			},
			{ name: 'Midjourney', img: midjourny, link: 'https://www.midjourney.com/auth/signin?callbackUrl=%2Faccount' },
			{ name: 'Google Gemini AI', img: bard, link: 'https://one.google.com/explore-plan/gemini-advanced?g1_landing_page=65' },
			{
				name: 'Dall - E',
				img: dalle,
				link: 'https://auth0.openai.com/u/login/identifier?state=hKFo2SB5ZFEyNjJnZ3FIY0liV0ZGSTVXcW8zbkJhN1NGbU5qX6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIHdnVnl5YUFpdVdjWnRPYzhfRVp6YV8xVzFRQlhtSmp1o2NpZNkgRE1nOTFmNVBDSFF0Yzd1MDE4V0tpTDB6b3BLZGlIbGU',
			},
		],
		price: 13.0,
	},
	{
		name: 'Productive Amigo',
		subs: [
			{ name: 'Microsoft Office', img: office, link: 'https://www.office.com/?ref=login' },
			{ name: 'ICloud', img: icloud, link: 'https://www.icloud.com/' },
			{ name: 'Google Drive', img: drive, link: 'https://drive.google.com/drive/quota' },
		],
		price: 53.3,
	},
];

/**

OTT subs:

[
 { name: 'Netflix', img: "https://ibb.co/KKbqvVX" validity: 'Lifetime' },
 { name: 'Prime Videos', img: "https://ibb.co/Z1XSvPM", validity: '1 Year' },
 { name: 'Disney Plus', img: "https://ibb.co/2jCcKwy", validity: '1 Month' },
{ name: 'Hulu', img: 'https://ibb.co/yXy57Gn', validity: '1 Month' },
{ name: ‘ESPN+’, img: 'https://ibb.co/SySvbMT', validity: '1 Month' },
{ name: ‘HBO Max’, img: 'https://ibb.co/CBQRp59', validity: '1 Year},
];

Video Editing:

[
 { name: 'CapCut', img: "https://ibb.co/mNYbPsV" validity: 'Lifetime' },
 { name: 'KineMaster', img: "https://ibb.co/yngkG26", validity: '1 Year' },
 { name: 'Filmora', img: "https://ibb.co/gFH1pQV", validity: '1 Month' },
 { name: 'Canva', img: "https://ibb.co/4MnyLBT", validity: '1 Month' },
 { name: 'Premer Pro', img: "https://ibb.co/phsSKMg", validity: '3 Month},
 { name: 'ClipChamp', img: "https://ibb.co/YtFGNhM", validity: '1 Year},
];

Office Tool:

[
 { name: 'HootSuite', img: "https://ibb.co/zNjkZTw" validity: '1 Year' },
 { name: 'Microsoft Teams', img: "https://ibb.co/vVsp5jh", validity: '1 Year' },
 { name: 'Zoom', img: "https://ibb.co/hBfnCHv", validity: '1 Month' },
 { name: 'Miro', img: "https://ibb.co/6Ffgnfj", validity: '1 Month' },
 { name: 'DropBox', img: "https://ibb.co/BfzRB4p", validity: '3 Month},
 { name: 'MicroSoft', img: "https://ibb.co/ckDn1BZ", validity: '1 Year},
];

3D Modeling Tools:

[
 { name: 'Auto3ds Max', img: "https://ibb.co/X2cHfrG" validity: '1 Year' },
 { name: 'Blender', img: "https://ibb.co/6BGKc9M", validity: '1 Year' },
 { name: 'Zoom', img: "https://ibb.co/hBfnCHv", validity: '1 Month' },
 { name: 'Maya', img: "https://ibb.co/SwqRjK5", validity: '1 Month' },
 { name: 'SketchUp', img: "https://ibb.co/mzh2CQx", validity: '3 Month},
 { name: 'ZBrush', img: "https://ibb.co/7C7sg8M", validity: '1 Year},
];

Photo Editing:

[
 { name: 'Adobe Photoshop', img: "https://ibb.co/Jd6xGdn" validity: '1 Year' },
 { name: 'Dx0', img: "https://ibb.co/N9m7NkR", validity: '1 Year' },
 { name: 'Photopea', img: "https://ibb.co/w67BgtJ", validity: '1 Month' },
 { name: 'Capture One Pro', img: "https://ibb.co/xG06m0b", validity: '1 Month' },
 { name: 'SkyLum', img: "https://ibb.co/MRRXZ6g", validity: '3 Month},
 { name: 'CyberLink Powerdirector', img: "https://ibb.co/wQzzBFK", validity: '1 Year},
];

Database Tool:

[
 { name: 'MongoDB', img: "https://ibb.co/CW6D8L6" validity: '1 Year' },
 { name: 'MariaDB', img: "https://ibb.co/R3vnPBD", validity: '1 Year' },
 { name: 'Oracle', img: "https://ibb.co/B39QQ9Y", validity: '1 Month' },
 { name: 'FileMaker', img: "https://ibb.co/Nn7qxLh", validity: '1 Month' },
 { name: 'OrientDB', img: "https://ibb.co/dGzRmC5", validity: '3 Month},
 { name: 'CouchDB', img: "https://ibb.co/hdZjSpf", validity: '1 Year},
];

*/
