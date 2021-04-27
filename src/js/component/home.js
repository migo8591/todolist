import React, { useState } from "react";

export function Home() {
	const [tareas, setTareas] = useState("");
	const [lista, setLista] = useState([]);

	function eliminar(index) {
		const deletelista = lista.filter((item, key) => index !== key);
		setLista(deletelista);
	}

	return (
		<div className="text-center mt-5">
			<h1 className="display-3 text-primary">Todo List</h1>
			<input
				value={tareas}
				onChange={e => {
					setTareas(e.target.value);
				}}
				onKeyPress={e => {
					if (e.key == "Enter") {
						//adicionar la tarea al array
						setLista(lista.concat(tareas));
						setTareas(""); //limpia el input
					}
				}}
			/>
			<div className="container mt-2">
				<div className="row">
					<div className="col-sm-4"></div>
					<div className="col-sm-4">
						<div id="list-example" className="list-group">
							{lista.map((item, index) => {
								return (
									<a
										className="list-group-item list-group-item-action"
										href="#list-item-1"
										key={index}>
										{item}
										<button
											onClick={() => eliminar(index)}
											type="button"
											className="btn btn-danger btn-sm ml-3">
											Eliminar
										</button>
									</a>
								);
							})}
						</div>
					</div>
					<div className="col-sm-4"></div>
				</div>
			</div>
		</div>
	);
}
//cada vez que hago enter alimento el arreglo y hago map para mostrarlo
