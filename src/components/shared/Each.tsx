

import { ReactNode } from 'react';

interface EachProps<T> {
    render: (item: T, index: number) => ReactNode;
    of: T[] | undefined | null;
}

const Each = <T,>({ render, of }: EachProps<T>) => (
    <>
        {of && of.length > 0 && of.map((item, index) => render(item, index))}
    </>
);

export default Each;
