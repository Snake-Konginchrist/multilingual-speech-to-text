// script.js
document.addEventListener('DOMContentLoaded', function() {
    var recognizer;
    const languageSelect = document.getElementById('languageSelect');
    const startButton = document.getElementById('startButton');

    function initializeSpeechService() {
        const subscriptionKey = "YOUR_SUBSCRIPTION_KEY";
        const region = "YOUR_SERVICE_REGION";
        const speechConfig = SpeechSDK.SpeechConfig.fromSubscription(subscriptionKey, region);
        speechConfig.speechRecognitionLanguage = languageSelect.value;
        const audioConfig = SpeechSDK.AudioConfig.fromDefaultMicrophoneInput();
        recognizer = new SpeechSDK.SpeechRecognizer(speechConfig, audioConfig);
    }

    function startSpeechRecognition() {
        startButton.textContent = "识别中……";
        startButton.disabled = true;

        recognizer.recognizeOnceAsync(result => {
            let outputDiv = document.getElementById('textOutput');
            if (result.reason === SpeechSDK.ResultReason.RecognizedSpeech) {
                outputDiv.textContent = `识别结果: ${result.text}`;
            } else if (result.reason === SpeechSDK.ResultReason.NoMatch) {
                outputDiv.textContent = "未能识别语音。";
            } else if (result.reason === SpeechSDK.ResultReason.Canceled) {
                const cancellation = SpeechSDK.CancellationDetails.fromResult(result);
                outputDiv.textContent = `语音识别取消, 原因: ${cancellation.reason}`;
            }
            startButton.textContent = "开始识别";
            startButton.disabled = false;
        }, error => {
            console.error(error);
            document.getElementById('textOutput').textContent = "发生错误，无法识别。";
            startButton.textContent = "开始识别";
            startButton.disabled = false;
        });
    }

    languageSelect.addEventListener('change', () => {
        initializeSpeechService();  // 重新初始化语音服务以应用新的语言设置
    });

    startButton.addEventListener('click', () => {
        if (!recognizer) {
            initializeSpeechService();
        }
        startSpeechRecognition();
    });
});