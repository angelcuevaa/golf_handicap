const OpenAi = require("openai")

const openai = new OpenAi({
    organization: "org-zdOyBmW1bOBBN32MjUEB6CwM",
    project: "proj_tCwmKhvXrTtsZGtOYbvh6iNq",
});

async function callOpenAi(){
    const response = await openai.chat.completions.create({
        model: "gpt-4o",
        messages: [
        {
            role: "user",
            content: [
            { type: "text", text: "Can you give me a json of each player's score on this scorecard?" },
            {
                type: "image_url",
                image_url: {
                "url": "https://range.static.thegrint.com/2016/09/11091324/SPS_basic.png",
                },
            }
            ],
        },
        ],
    });
    console.log(response.choices[0]);
}
callOpenAi()
