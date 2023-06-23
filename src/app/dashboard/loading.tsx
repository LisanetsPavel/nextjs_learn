import Spinner from 'pages/app/ui/Spinner';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div role="status" className="flex justify-center items-center">
        <Spinner />
    </div>
}
