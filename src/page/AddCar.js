const AddCar = () => {
    return (  
        <div>
            <div>
                <div>
                    <p>Add New Car</p>
                </div>
                <div>
                    <div>
                        <div>
                            <p>Nama/Tipe Mobil*</p>
                        </div>
                        <div>
                            <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Harga*</p>
                        </div>
                        <div>
                            <input type="number"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Foto*</p>
                        </div>
                        <div>
                            <input type="file"/>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p>Kategori*</p>
                        </div>
                        <div>
                            <select>
                                <option>
                                    2- 4 orang
                                </option>
                                <option>
                                    4 -6 orang
                                </option>
                                <option>
                                    6-8 orang
                                </option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default AddCar;