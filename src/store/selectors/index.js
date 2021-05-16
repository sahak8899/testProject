export const appRedySelector = (state) => {
	const data = mainDataSelector(state);
	return !!data;
};
export const mainDataSelector = (state) => state.dataset;
export const guidesSelector = (state) => state.dataset.guides;
export const citiesSelector = (state) => state.dataset.cities;
export const experiencesSelector = (state) => state.dataset.experiences;
export const explorersSelector = (state) => state.dataset.explorers;
export const languageSelector = (state) => state.language;
