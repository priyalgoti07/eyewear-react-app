import React from 'react'
import { useTable } from 'react-table'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { removecart, updateQuntiy } from '../../cartData/cartSlice'

const Cart = () => {
    const displayCartData = useSelector(state => state)
    const dispatch = useDispatch()
    const handleQuantityChange = (id, incdec, currentQuantity) => {
        const cartItem = displayCartData.carts.find(item => item.id === id);

        // Prevent quantity from going below 1
        if (incdec === -1 && currentQuantity > 1) {
            dispatch(updateQuntiy({ id, incdec }));
        }
        // Prevent quantity from exceeding stock or any defined limit
        if (incdec === 1 && cartItem.displayItem.quantity > currentQuantity) {
            dispatch(updateQuntiy({ id, incdec }));
        }
    };

    const data = React.useMemo(() =>
        displayCartData.carts.map(item => (
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
                Cell: ({ cell }) => {
                    const id = cell.row.original.id;
                    const currentQuantity = cell.row.original.quantity; // Ensure it's updated

                    return (
                        <div className='border-[1px] border-gray-400 max-w-[55%] flex justify-center gap-4 py-1 px-3'>
                            <button onClick={() => handleQuantityChange(id, -1, currentQuantity)}>-</button>
                            {currentQuantity}
                            <button onClick={() => handleQuantityChange(id, 1, currentQuantity)}>+</button>
                        </div>
                    );
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
        []);

    const {
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data });


    const subTotal = data?.map((item) => item.total).reduce((acc, item) => acc + item, 0);
    const formattedSubtotal = subTotal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

    return ((displayCartData.carts.length !== 0) ?
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
        :
        <div className='h-[500px] container m-auto flex flex-col items-center justify-center my-32 text-[#423c3a]'>
            <div className='uppercase tracking-[2px] text-xl font-bold mb-4'>Your cart is looking empty</div>
            <Link className='text-[#585858] tracking-wider underline cursor-pointer uppercase underline-offset-[5px]' to={"/"}>Shopp Now</Link>
        </div>
    )
}

export default Cart