import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { removecart } from '../../cartData/cartSlice'

const Cart = () => {
    const displayCartData = useSelector(state => state)
    const dispatch = useDispatch()
    const [quantities, setQuantities] = useState({})
    console.log("displayCartData", displayCartData.cart);


    useEffect(() => {
        const initialQuantities = {}
        data.map((item) => {
            initialQuantities[item.id] = item.quantity
            return initialQuantities
        })
        setQuantities(initialQuantities)
    }, [])

    const handleQuantityChange = (id, incdec) => {
        setQuantities(prev => {
            const newQuantity = (prev[id] || 0) + incdec
            if (newQuantity < 1) return prev
            return { ...prev, [id]: newQuantity };
        })
    }

    const data = React.useMemo(() =>
        displayCartData.carts.map(item => (
            {
                id: item.id,
                title: item.displayItem.title,
                price: item.displayItem.price,
                quantity: item.quantity,
                total: parseFloat(item.displayItem.price.replace('₱', '').replace(',', '')) * quantities[item.id] || item.quantity,
                images: item.displayItem.images.main,
            })),
        [displayCartData, quantities]
    );

    const columns = React.useMemo(
        () => [
            {
                Header: 'ITEM',
                accessor: 'title',
                Cell: ({ cell }) => {
                    return (
                        <div className="flex items-center gap-2">
                            <img src={cell.row.original.images} alt={cell.value}
                                className="w-36 h-24 object-cover border-[7px] hover:border-2 hover:border-[#C8651B]" />
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
                Cell: ({ cell, row }) => {
                    const { id } = cell.row.original;
                    const quantity = quantities[id] || cell.value;
                    return (
                        <div className='border-[1px] border-gray-400 max-w-[55%] flex justify-center gap-5'>
                            <button onClick={() => handleQuantityChange(id, -1)}>-</button>
                            {quantity}
                            <button onClick={() => handleQuantityChange(id, 1)}>+</button>
                        </div>
                    )
                }
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
        [quantities]
    );

    const {
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });
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
                <div className='float-end'>
                    SunTotal
                </div>
            </div>

        </div>

    )
}

export default Cart