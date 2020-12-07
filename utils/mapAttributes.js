const mapAttributes = (model, { fieldNodes }) => {
	// get the fields of the Model (columns of the table)
	const columns = new Set(Object.keys(model.rawAttributes));
	// get nested attributes for each selection set
	const nested_attributes = (selectionSet) =>
		(selectionSet &&
			selectionSet.selections &&
			selectionSet.selections.reduce(
				(acc, { name: { value }, selectionSet }) =>
					new Set([...acc, value, ...nested_attributes(selectionSet)]),
				new Set()
			)) ||
		[];
	const requested_attributes = nested_attributes(fieldNodes[0].selectionSet);
	// filter the attributes against the columns
	return [...requested_attributes].filter((attribute) => columns.has(attribute));
};

module.exports = { mapAttributes };
