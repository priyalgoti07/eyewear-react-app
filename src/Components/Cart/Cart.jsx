import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { removecart } from '../../cartData/cartSlice'

const Cart = () => {
    const displayCartData = useSelector(state => state)
    console.log("displayCartData", displayCartData);
    const dispatch = useDispatch()
    const data = React.useMemo(() =>
        displayCartData.carts.map(item => ({
            id: item.id,
            title: item.displayItem.title,
            price: item.displayItem.price,
            quantity: item.quantity,
            total: parseFloat(item.displayItem.price.replace('₱', '').replace(',', '')) * item.quantity,
            images: item.displayItem.images.main,
        })),
        [displayCartData]
    );
    const columns = React.useMemo(
        () => [
            {
                Header: 'ITEM',
                accessor: 'title',
                Cell: ({ cell }) => {
                    return (
                        <div className="flex items-center gap-2">
                            <img src={cell.row.original.images} alt={cell.value} className="w-36 h-24 object-cover border-[7px] hover:border-2 hover:border-[#C8651B]" />
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
            {
                Header: '',
                accessor: 'remove',
                Cell: ({ cell }) => {
                    return (
                        <div>
                            <button
                                onClick={() => dispatch(removecart(cell.row.original.id))}
                                className='bg-[#efefef] px-3 py-[4px] text-black underline rounded font-semibold hover:bg-[#380c0f] hover:text-white'>
                                Remove</button>
                        </div>
                    );
                }
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
    console.log("rows,", rows);
    return (
        <div className='container m-auto flex flex-col items-center justify-center my-32 text-[#423c3a]'>

            <div>
                <h1 className='uppercase tracking-[2px] text-xl font-bold mb-8'>Your cart</h1>
            </div>
            <div className='min-w-[1200px]'>
                <table className='w-[100%]'>
                    <thead>
                        {headerGroups.map((headerGroup, index) => (
                            <tr {...headerGroup.getHeaderGroupProps()} key={index} >
                                {headerGroup.headers.map(column => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className='text-xs text-left py-3 border-b-[1px] border-[#c2c2c2]'
                                    >
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()} className=''>
                        {rows.map((row, index) => {
                            console.log("row", row);
                            prepareRow(row);
                            return (
                                <tr {...row.getRowProps()} key={index}>
                                    {row.cells.map(cell => (
                                        <td
                                            {...cell.getCellProps()}
                                            className='py-[25px] font-Figtree font-medium border-b-[1px] border-[#c2c2c2]'
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