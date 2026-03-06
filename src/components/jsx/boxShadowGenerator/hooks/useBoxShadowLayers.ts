/**
 * Custom hook for managing box shadow layer state and operations
 */

import { useState, useMemo } from 'react';
import {
	DEFAULT_LAYER,
	BOX_SHADOW_PRESETS,
	generateLayerId,
	type BoxShadowLayer,
} from 'src/data/boxShadowPresets';
import { generateBoxShadowCSS } from 'src/infrastructure/cssUtils';

const MAX_LAYERS = 5;

/**
 * Custom hook for managing box shadow layer state and operations
 *
 * Provides state and handlers for managing multiple box shadow layers,
 * including adding/removing layers, updating layer properties, and applying presets.
 *
 * @returns Object containing:
 * - `layers` - Array of all shadow layers
 * - `activeLayer` - The currently active layer object
 * - `activeLayerIndex` - Index of the active layer
 * - `boxShadowCSS` - Generated CSS string for all layers
 * - `handleLayerChange` - Function to update a property on the active layer
 * - `handleAddLayer` - Function to add a new layer
 * - `handleRemoveLayer` - Function to remove the active layer
 * - `handleApplyPreset` - Function to apply a preset configuration
 * - `handleSetActiveLayerIndex` - Function to set the active layer index
 * - `MAX_LAYERS` - Maximum number of layers allowed
 */
export function useBoxShadowLayers() {
	const [layers, setLayers] = useState<BoxShadowLayer[]>([DEFAULT_LAYER]);
	const [activeLayerIndex, setActiveLayerIndex] = useState(0);

	const activeLayer = layers[activeLayerIndex] || DEFAULT_LAYER;

	const boxShadowCSS = useMemo(
		() => generateBoxShadowCSS(layers),
		[layers]
	);

	const handleLayerChange = (
		property: keyof BoxShadowLayer,
		value: string | number | boolean
	) => {
		setLayers((prev) =>
			prev.map((layer, index) =>
				index === activeLayerIndex
					? { ...layer, [property]: value }
					: layer
			)
		);
	};

	const handleAddLayer = () => {
		if (layers.length < MAX_LAYERS) {
			setLayers((prev) => [
				...prev,
				{ ...DEFAULT_LAYER, id: generateLayerId() },
			]);
			setActiveLayerIndex(layers.length);
		}
	};

	const handleRemoveLayer = () => {
		if (layers.length > 1) {
			setLayers((prev) =>
				prev.filter((_, index) => index !== activeLayerIndex)
			);
			setActiveLayerIndex((prev) => Math.max(0, prev - 1));
		}
	};

	const handleApplyPreset = (preset: keyof typeof BOX_SHADOW_PRESETS) => {
		setLayers(BOX_SHADOW_PRESETS[preset]);
		setActiveLayerIndex(0);
	};

	const handleSetActiveLayerIndex = (index: number) => {
		setActiveLayerIndex(index);
	};

	return {
		layers,
		activeLayer,
		activeLayerIndex,
		boxShadowCSS,
		handleLayerChange,
		handleAddLayer,
		handleRemoveLayer,
		handleApplyPreset,
		handleSetActiveLayerIndex,
		MAX_LAYERS,
	};
}
