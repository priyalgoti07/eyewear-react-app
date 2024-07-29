import React from 'react'
import { useSelector } from 'react-redux'
import { useTable } from 'react-table'

const Cart = () => {


    const displayCartData = useSelector(state => state)
    console.log("displayCartData", displayCartData?.carts.map((item) => item));

    // const data = React.useMemo(
    //     () => [
    //         { id: 1, name: 'John Doe', age: 28, city: 'New York' },
    //         { id: 2, name: 'Jane Smith', age: 34, city: 'San Francisco' },
    //         { id: 3, name: 'Alice Johnson', age: 24, city: 'Los Angeles' },
    //         { id: 4, name: 'Mike Brown', age: 45, city: 'Chicago' },
    //         { id: 5, name: 'Sara Wilson', age: 30, city: 'Seattle' },
    //     ],
    //     []
    // );
    const data = React.useMemo(() =>
        displayCartData.carts.map(item => ({
            id: item.id,
            title: item.displayItem.title,
            price: item.displayItem.price,
            quantity: item.quantity,
            total: parseFloat(item.displayItem.price.replace('₱', '').replace(',', '')) * item.quantity,
            images: item.displayItem.images.main,
        })),
        []
    );
    console.log("data", data);
    const columns = React.useMemo(
        () => [
            {
                Header: 'ITEM',
                accessor: 'title',
                cell: ({ cell }) => {
                    console.log("cell.row.original.images", cell.row.original.images)
                    return (
                        <div className="flex items-center">
                            <img src={cell.row.original.images} alt={cell.value} className="w-6 h-6 mr-2" />
                            {cell.value}
                        </div>
                    );
                }
            },
            {
                Header: 'PRICE',
                accessor: 'price',
            },
            {
                Header: 'QUANTITY',
                accessor: 'quantity',
            },
            {
                Header: 'TOTAL',
                accessor: 'total',
            },
        ],
        []
    );

    const {
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
    return (
        <div className='container m-auto flex flex-col items-center justify-center my-32 font-[#423c3a]'>

            <div>
                <h1 className='uppercase tracking-[2px] text-xl font-bold mb-8'>Your cart</h1>
            </div>
            <div>
                <table>
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={index} >
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className='text-xs'
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className='border-t-[1px] border-[#272525]'>
                        {rows.map((row, index) => {
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={index}>
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className='p-7'
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

        </div>

    )
}

export default Cart