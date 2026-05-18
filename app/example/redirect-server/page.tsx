import { redirectToLink } from "./actions/action";

export default function RedirectServer() {
    return (
        <div>
            <button
                onClick={redirectToLink}>
                Redirect using Server
            </button>
        </div>
    );
}