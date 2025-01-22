import { useEffect } from "react";
import { useDispatch } from "react-redux";
import type { Dispatch } from '@store/store'
import { setBackground } from "@store/actions/app";

const useBackground = (color: string) => {
	const dispatch = useDispatch<Dispatch>()

	useEffect(() => {
		dispatch(setBackground(color));
		return () => { dispatch(setBackground('white')) }
	}, [dispatch, color])
}

export default useBackground