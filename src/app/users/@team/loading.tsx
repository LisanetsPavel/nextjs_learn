import Spinner from 'pages/app/ui/Spinner';

export default function Loading() {
    return <div role="status" className="flex justify-center items-center">
        <Spinner />
    </div>
}
