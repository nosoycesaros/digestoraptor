const ErrorComponent = () => (
    <div className="text-center">
        <div className="text-5xl mb-5">
        😵‍💫
        </div>
        <h2 className="text-l mb-5">Please check your <span className="font-mono font-bold">funnel code</span><br />It seems it has lost its shape.</h2>
        <p className="text-sm text-gray-400	">The JSON code you provided has an incorrect format.<br />Please use our <a className="text-blue-300" href="/funnel.json">example code</a> as a guideline</p>
    </div>
)

export default ErrorComponent