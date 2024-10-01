import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTable } from 'react-table'
import { removecart, updateQuntiy } from '../../cartData/cartSlice'
import { Link } from 'react-router-dom'

const Cart = () => {
    const displayCartData = useSelector(state => state)
    const dispatch = useDispatch()
    console.log("displayCartData", displayCartData);
    const handleQuantityChange = (id, incdec) => {
        dispatch(updateQuntiy({ id: id, incdec: incdec }))
    }
    const data = React.useMemo(() =>
        displayCartData.carts.map(item => (
            console.log("item", item),
            {
                id: item.id,
                title: item.displayItem.title,
                price: item.displayItem.price,
                originalQt: item.displayItem.quantity,
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
                    { console.log("cell", cell.value, row?.original?.originalQt, row?.original?.originalQt > cell.value); }
                    return (
                        <div className='border-[1px] border-gray-400 max-w-[55%] flex justify-center gap-4'>
                            <button onClick={() => handleQuantityChange(id, -1, "decrement")}>-</button>
                            {cell.value}
                            <button onClick={() => handleQuantityChange(id, 1, "increment")}>+</button>
                        </div>
                    )
                }
            },
            {
                Header: 'TOTAL',
                accessor: 'total',
                Cell: ({ cell }) => {
                    const totalFormated = cell.value.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    return (
                        <div>{`₱ ${totalFormated}`}</div>
                    )
                }
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


    const subTotal = data?.map((item) => item.total).reduce((acc, item) => acc + item, 0);
    const formattedSubtotal = subTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

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
                                {headerGroup.headers.map((column, index) => (
                                    <th
                                        {...column.getHeaderProps()}
                                        className='text-xs text-left py-3 border-b-[1px] border-[#c2c2c2]'
                                        key={index}
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
                                    {row.cells.map((cell, index) => (
                                        <td
                                            {...cell.getCellProps()}
                                            className='py-[25px] font-Figtree font-medium border-b-[1px] border-[#c2c2c2]'
                                            key={index}
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className='float-end mt-14 flex flex-col justify-center items-end'>
                    <div className='flex  items-start tracking-widest '>
                        <span className='uppercase font-bold text-black  text-[11px]'>SubTotal</span>
                        <span className='text-blac text-[28px] font-black'>{`₱${formattedSubtotal}`}</span>
                    </div>
                    <div className='text-[12px] mt-[10px] italic font-Montserrat pb-3 border-b-[1px] border-[#c2c2c2]'>Shipping and taxes computed at checkout</div>
                    <div className='mt-10 bg-black text-white'><button className='py-4 px-10 uppercase font-semibold tracking-widest hover:bg-[#C8651B]'>Checkout</button></div>
                    <Link className='mt-2 text-[#585858] tracking-wider underline cursor-pointer' to={"/"}>Keep Shopping</Link>
                </div>
            </div>

        </div>

    )
}

export default Cart