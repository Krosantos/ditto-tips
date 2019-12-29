import React, { useCallback, useState } from 'react';
import {
	autocomplete,
	optionsBox,
	input,
	optionsButton,
} from './autocomplete.scss';

const useAutocomplete = (options, onSelect) => {
	const [typedValue, setValue] = useState('');
	const [optionsVisible, setOptionsVisible] = useState(false);
	const showOptions = useCallback(() => setOptionsVisible(true), []);
	const hideOptions = useCallback(() => setOptionsVisible(false), []);
	const [validOptions, setValidOptions] = useState(options);
	const onValueChange = useCallback((event) => {
		setValue(event.target.value);
		const newValidOptions = options.filter((option) => {
			const lower = option.toLowerCase();

			return lower.includes(event.target.value.toLowerCase());
		});

		setValidOptions(newValidOptions);
	}, [options]);
	const selectOption = useCallback((event) => {
		const { value } = event.target.dataset;

		setValue(value);
		onSelect(value);
	}, [onSelect]);

	return {
		hideOptions,
		onValueChange,
		optionsVisible,
		selectOption,
		showOptions,
		typedValue,
		validOptions,
	};
};

const Autocomplete = ({ options, onSelect }) => {
	const {
		hideOptions,
		onValueChange,
		optionsVisible,
		selectOption,
		showOptions,
		typedValue,
		validOptions,
	} = useAutocomplete(options, onSelect);

	return (
		<div className={autocomplete} onBlur={hideOptions}>
			<input
				className={input}
				onChange={onValueChange}
				onFocus={showOptions}
				value={typedValue}
			/>
			{
				optionsVisible
			&& (
				<div className={optionsBox}>
					{
						validOptions.map((option) => (
							<button
								key={option}
								className={optionsButton}
								data-value={option}
								onMouseDown={selectOption}
								type="button"
							>
								{option}
							</button>
						))}
				</div>
			)}
		</div>
	);
};

export default Autocomplete;
