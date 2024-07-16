const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "254796266758" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254796266758";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "254796266758";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_46_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxODUsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjE1LFxuICAgICAgICA3MixcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNjksXG4gICAgICAgIDIwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIxNixcbiAgICAgICAgOTcsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg2LFxuICAgICAgICAyNixcbiAgICAgICAgMTUxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMjMsXG4gICAgICAgIDg2LFxuICAgICAgICA4OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA1NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNTMsXG4gICAgICAgIDc5LFxuICAgICAgICAyNDgsXG4gICAgICAgIDg1LFxuICAgICAgICAxOCxcbiAgICAgICAgNjYsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTc3LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMSxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDM5LFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzLFxuICAgICAgICA2MSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODcsXG4gICAgICAgIDEzLFxuICAgICAgICAzLFxuICAgICAgICAxODgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTY4LFxuICAgICAgICAxMCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDksXG4gICAgICAgIDIzNyxcbiAgICAgICAgNzksXG4gICAgICAgIDExMixcbiAgICAgICAgMTYyLFxuICAgICAgICAzLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg2LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNixcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA2NCxcbiAgICAgICAgMTExLFxuICAgICAgICAzMSxcbiAgICAgICAgODUsXG4gICAgICAgIDMxLFxuICAgICAgICAxNTksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjQzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjUzLFxuICAgICAgICA3NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDYxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEsXG4gICAgICAgIDMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzMSxcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDExNixcbiAgICAgICAgOTEsXG4gICAgICAgIDI3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODksXG4gICAgICAgIDI0MixcbiAgICAgICAgNTIsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTUsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDUwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4OSxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU1LFxuICAgICAgICA0NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkzLFxuICAgICAgICAyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjQzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDc3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NixcbiAgICAgICAgOTQsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxOTEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICA4NixcbiAgICAgICAgODYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxODUsXG4gICAgICAgIDI2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDM4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTUsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjA1LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm4yOWRtazZwcGk3SzRsZDZUeXlZVnFZRHVYSG0valdlK3UwL2RDbTFYYUE9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0Nzk2MjY2NzU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJGMTgyRTFEQTcxOEI5REZFNkQ2RThFRDNDQjA1RDE3NVwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjExMTk1NjZcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwib0pVUjJHRFdUNHlnb1dQMklEZEtfQVwiLFxuICBcInBob25lSWRcIjogXCJkNTQzMTVjNy0zYjk4LTQ5YmQtOThmNy0xYTc4ZjlmNmNlZmNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAzNyxcbiAgICAgIDEwNCxcbiAgICAgIDc1LFxuICAgICAgMTM4LFxuICAgICAgMTU1LFxuICAgICAgNzEsXG4gICAgICAxODUsXG4gICAgICA4MixcbiAgICAgIDY1LFxuICAgICAgMjcsXG4gICAgICA1OSxcbiAgICAgIDEzMCxcbiAgICAgIDc3LFxuICAgICAgMTQ3LFxuICAgICAgNTIsXG4gICAgICA2MyxcbiAgICAgIDIwMyxcbiAgICAgIDIxOCxcbiAgICAgIDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiBmYWxzZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2MyxcbiAgICAgIDI0LFxuICAgICAgOTEsXG4gICAgICAxNTUsXG4gICAgICA2MCxcbiAgICAgIDgzLFxuICAgICAgMTk3LFxuICAgICAgNDYsXG4gICAgICAxMTAsXG4gICAgICA1NixcbiAgICAgIDEwOCxcbiAgICAgIDIxLFxuICAgICAgMTA5LFxuICAgICAgMTcsXG4gICAgICAyNDgsXG4gICAgICA5MCxcbiAgICAgIDEzNSxcbiAgICAgIDI0LFxuICAgICAgMTQwLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSjdDaStVRUVNWG0yTFFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ6ZjhqY1F6UW9sY2JOc3BDQk5FdXBxa2J1bjNTU3MvcUdnMVM4bW9LWjBJPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjBrTGFta2RJKzc0Y1hOS3pPY1pkbjJxRzhvd3NPMU0vUU54TXY4ZDhDQ3pSNzJMYXVDWXZsNUxBZUtLcHgwQk16S1p4QzcxK1o3SGIvSjVzK3hzakN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkNGY0hsZmlZMUVSZ21ucFYxWVVRVkUwT0Ywc0FmYThLdk11YSs2UjQxM0ZzTXdON09KNTFyWWowajM3QWJWUHNDSHhCWUpIdWFJcnl1aEMyRGJEOGdBPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0Nzk2MjY2NzU4OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzA4NTg1MTM0NDkwNDY6MTdAbGlkXCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTQ3OTYyNjY3NTg6MTdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTExOTU2MixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUgrYlwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBSCtiLmpzb24iOiAie1wia2V5RGF0YVwiOlwiaWxxbXNSVlh4WG1rRm9kc0EzYmhwa0NHNnE3a1NtNi9mU0RHOWhZOWZpaz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMjg1NzQyODc3LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIK2MuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwSitHK0tqaTljaW9Bd01DUDdnbmhrbzAyVkQ2OTZLcXBVbFQwMXNWV1RnPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjEyODU3NDI4NzcsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjEwODc0MTcwMjVcIn0iCn0=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "+",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Bluealpha",
  packname: process.env.PACK_NAME || "BlueAlpha MD",
  botname : process.env.BOT_NAME  || "BLUEALPHA MD",
  ownername:process.env.OWNER_NAME|| "Bluealpha",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
