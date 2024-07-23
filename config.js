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


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349052951846";




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
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_50_07_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDU4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjM2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNjgsXG4gICAgICAgIDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDc1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTA4LFxuICAgICAgICA0NCxcbiAgICAgICAgNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjksXG4gICAgICAgIDMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk5LFxuICAgICAgICAyMjMsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTE5LFxuICAgICAgICA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgOTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA3LFxuICAgICAgICAwLFxuICAgICAgICA0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUyLFxuICAgICAgICA1OCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxNTUsXG4gICAgICAgIDQzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjIsXG4gICAgICAgIDYyLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjI1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDU1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkyLFxuICAgICAgICA3MSxcbiAgICAgICAgOThcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyLFxuICAgICAgICAxMjMsXG4gICAgICAgIDI2LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDQxLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDk5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDQwLFxuICAgICAgICA3OFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExMlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgNDZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4MixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTQxLFxuICAgICAgICA5MSxcbiAgICAgICAgODMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgMTA3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE0LFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTczLFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJ6dE8wamtKQmZkYWRwcEM1TnBrMkxzWnh4ZCtGOHlmZCt5NzV2RVM1NWtVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLV3JIZEJReFR1LTZOdmpoUEdtekRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjFiOWZjMDJmLTEwZDUtNGY3NS05MjBmLTc4YzY4NWJmMWU0OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2OSxcbiAgICAgIDIyOSxcbiAgICAgIDIxMixcbiAgICAgIDE2MyxcbiAgICAgIDEyOSxcbiAgICAgIDI0LFxuICAgICAgOTIsXG4gICAgICA2MCxcbiAgICAgIDIwMixcbiAgICAgIDcyLFxuICAgICAgMjM3LFxuICAgICAgMTg4LFxuICAgICAgNjMsXG4gICAgICAxMjYsXG4gICAgICAyNDUsXG4gICAgICAxNzIsXG4gICAgICAxMzUsXG4gICAgICAxOTUsXG4gICAgICA5MixcbiAgICAgIDE2OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMTIsXG4gICAgICAyMCxcbiAgICAgIDUxLFxuICAgICAgNTYsXG4gICAgICAxOTYsXG4gICAgICAxMixcbiAgICAgIDI0OSxcbiAgICAgIDEzNSxcbiAgICAgIDEwNixcbiAgICAgIDYxLFxuICAgICAgMjA2LFxuICAgICAgMTE5LFxuICAgICAgNTcsXG4gICAgICA3MCxcbiAgICAgIDE3NSxcbiAgICAgIDEwMSxcbiAgICAgIDE0OCxcbiAgICAgIDUyLFxuICAgICAgMTgyLFxuICAgICAgMTU4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxQTlJIWU1SXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDUyOTUxODQ2OjI1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiS2VyZW4taGFwcHVjaFwiLFxuICAgIFwibGlkXCI6IFwiMTQ4NzgwNjg3NDgzMjk6MjVAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSVhCenFNRkVOdjIvN1FHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCI3bVBvb2FMRldQRGZUT2RvYWVNQVU1SW9yTzdNOWhjM29salBUMmRnMkIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjZWSWtDYlgvMVl5N0Z6RnFxbFZSQjd3VEZvclBuZUpxemQ1WW14ZWdqOEg4aDdBdTRUS1NjQTJIYmduSGMzbTZML2dVVHE4N3VoamlRVkw1SEhTaENBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkx6dC9aVnZGTWNmb2tZZzhSQ2tlbDRxQWdFYUtyN0dFVXlZakdRY09haWxBNlphQTNhS3VSZnRtNU5MT0NUS1oxbytiSXdHYTlZMm5NSTdYd0ZKTEF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDkwNTI5NTE4NDY6MjVAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTc2MDYwNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUU1R1wiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRTVHLmpzb24iOiAie1wia2V5RGF0YVwiOlwieWJpcmJZZlIzV2g3aUhRWm1rdk8zc3kwVy9sMlByM3hWSmRWSXh2by96RT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNDE2ODYzODc1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzIxNzUxNDMyMzA0XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
