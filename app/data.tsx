import { unstable_noStore } from "next/cache";

export default async function Data() {
    unstable_noStore();

    const data: string = await new Promise((resolve) => {
        setTimeout(() => resolve("data"), 1000);
    });

    return <div>
        {data}
    </div>;
}