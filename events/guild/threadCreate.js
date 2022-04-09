//The Module
module.exports = async(client, thread) => {
        try {
            if (thread.joinable && !thread.joined) {
                await thread.join();
            }
        } catch (e) {
            console.log(String(e).grey)
        }
    }
    /**
     * @INFO
     * Bot Coded by 𝖕𝖍𝖚́ 𝖑𝖊̂#2042 | https://discord.gg/aWgPHsMEUw
     * @INFO
     * Work for Milrato Development |https://by.com.vn/XKD0Mg
     * @INFO
     * Please mention him / DeRux Development, when using this Code!
     * @INFO
     */