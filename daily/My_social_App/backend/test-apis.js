import fs from 'fs';

let logOutput = "";
const log = (msg) => {
    console.log(msg);
    logOutput += msg + "\n";
};
const logError = (msg, err) => {
    console.error(msg, err);
    logOutput += msg + " " + err + "\n";
};

const BASE_URL = 'http://localhost:5000/api';

async function testAPIs() {
    log("--- STARTING API TESTS ---");

    // 1. User APIs
    log("\n[1] Testing User APIs...");
    let userId = null;

    try {
        // POST /user/register
        log("-> POST /user/register");
        const regRes = await fetch(`${BASE_URL}/user/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: `Test User ${Date.now()}`,
                email: `test${Date.now()}@example.com`,
                password: "password123",
            })
        });
        const regData = await regRes.json();
        log(`   Status: ${regRes.status}`);
        if (regRes.status !== 201) log("   Response: " + JSON.stringify(regData));
        userId = regData._id;

        // POST /user/login
        log("-> POST /user/login");
        const loginRes = await fetch(`${BASE_URL}/user/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: regData.email,
                password: "password123",
            })
        });
        log(`   Status: ${loginRes.status}`);

        // GET /user/getalluser
        log("-> GET /user/getalluser");
        const allUsersRes = await fetch(`${BASE_URL}/user/getalluser`);
        log(`   Status: ${allUsersRes.status}`);

        // GET /user/getuser/:id
        log(`-> GET /user/getuser/${userId}`);
        const getUserRes = await fetch(`${BASE_URL}/user/getuser/${userId}`);
        log(`   Status: ${getUserRes.status}`);

        // PUT /user/updateuser/:id
        log(`-> PUT /user/updateuser/${userId}`);
        const putUserRes = await fetch(`${BASE_URL}/user/updateuser/${userId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: "Updated Name" })
        });
        log(`   Status: ${putUserRes.status}`);

    } catch (err) {
        logError("   Error in User APIs:", err.message);
    }

    // 2. Post APIs
    let postId = null;
    log("\n[2] Testing Post APIs...");
    try {
        if (!userId) throw new Error("Need a valid userId to create a post.");

        // POST /post/createpost
        log("-> POST /post/createpost");
        const createPostRes = await fetch(`${BASE_URL}/post/createpost`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                image: "https://example.com/image.png",
                caption: "Test Caption",
                uploadedBy: userId
            })
        });
        const postData = await createPostRes.json();
        log(`   Status: ${createPostRes.status}`);
        if (createPostRes.status !== 201) log("   Response: " + JSON.stringify(postData));
        postId = postData._id;

        // GET /post/getallpost
        log("-> GET /post/getallpost");
        const allPostsRes = await fetch(`${BASE_URL}/post/getallpost`);
        log(`   Status: ${allPostsRes.status}`);

        // GET /post/getpost/:id
        log(`-> GET /post/getpost/${postId}`);
        const getPostRes = await fetch(`${BASE_URL}/post/getpost/${postId}`);
        log(`   Status: ${getPostRes.status}`);

        // PUT /post/updatepost/:id
        log(`-> PUT /post/updatepost/${postId}`);
        const putPostRes = await fetch(`${BASE_URL}/post/updatepost/${postId}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ caption: "Updated Caption" })
        });
        log(`   Status: ${putPostRes.status}`);

        // DELETE /post/deletepost/:id
        log(`-> DELETE /post/deletepost/${postId}`);
        const delPostRes = await fetch(`${BASE_URL}/post/deletepost/${postId}`, { method: 'DELETE' });
        log(`   Status: ${delPostRes.status}`);

    } catch (err) {
        logError("   Error in Post APIs:", err.message);
    }

    // Final cleanup: Delete the test user we created
    if (userId) {
        log(`\n[3] Cleanup: DELETE test user ${userId}`);
        try {
            const delUserRes = await fetch(`${BASE_URL}/user/deleteuser/${userId}`, { method: 'DELETE' });
            log(`   Status: ${delUserRes.status}`);
        } catch (err) {
            logError("   Error during cleanup:", err.message);
        }
    }

    log("\n--- API TESTS FINISHED ---");
    fs.writeFileSync('output.log', logOutput, 'utf8');
}

testAPIs();
