Big Sur and Migration Assistant

I had a problem with [Migration Assistant](https://support.apple.com/en-us/HT204350) and searched for a solution on the internet and found nothing. I suspected a solution, but the [Apple Geniuses](https://www.apple.com/retail/geniusbar/) could not confirm if I was correct. Since I now have a solution, I thought I would document it for the next person.

I have a hardware issues on a [2020 Intel MacBook Air](https://support.apple.com/kb/SP813?locale=en_US). It passed the Genius hardware test so they recommended a clean install of the software. I had a [Time Machine](https://support.apple.com/en-us/HT201250) backup, so I told them to wipe it and reinstall the operating system. They did not reinstall the operating system but rather upgraded me to [Big Sur](https://en.wikipedia.org/wiki/MacOS_Big_Sur).

Here is the problem: [Big Sur Migration Assistant](https://support.apple.com/en-us/HT203981), in the set up process, could not see my [Catalina](https://en.wikipedia.org/wiki/MacOS_Catalina) created Time Machine backup.

For completeness here are some other observations:
* Big Sur Migration Assistant can see a Big Sur created Time Machine backup from a secondary computer. 
* Finder on another computer can see both backup directories.
* [Internet recovery](https://www.ifixit.com/Guide/How+to+use+Internet+Recovery+to+install+macOS+to+a+new+SSD/119499) on the MacBook Air could see all the Time Machine backups.
* The OS version of the Catalina backups were "unknown."

My hypothesis: Big Sur Migration Assistant is not backwards compatible with Catalina created Time Machine backups. And Apple did not document this change, nor inform their Geniuses.

The solution: A new clean install, but this time installing Catalina. Catalina's version of Migration Assistant can see both my Catalina and the Big Sur created backups. Accept hypothesis and start looking for a new backup routine that documents breaking changes.

