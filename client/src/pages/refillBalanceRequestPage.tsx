import { useState, ChangeEvent, FormEvent } from 'react';
import {
  Box,
  Button,
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { Wallet } from '@mui/icons-material';
import { RefillBalanceRequest } from '../types/refillbalance';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../app/store';
import { refillBalanceRequest } from '../features/balance/balanceThunk';

const RefillBalanceRequestPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<RefillBalanceRequest>({
    amount: 0,
    paymentType: 'cash',
    file: null,
  });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    setFormData((prev) => ({ ...prev, file: selectedFile }));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (
    e: ChangeEvent<{ value: 'cash' | 'bank-transfer' }>
  ) => {
    setFormData((prev) => ({ ...prev, paymentType: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    await dispatch(refillBalanceRequest(formData));
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      className="relative flex max-w-[1000px] gap-4 h-full my-20 m-auto items-center justify-center"
    >
      <img
        src="assets/images/balanceCard.svg"
        className="rounded w-0 md:w-[450px] drop-shadow-lg"
        alt="Balance Card"
      ></img>
      <Box
        className={
          'absolute top-[42%] left-[3%] text-white text-2xl uppercase font-Inria'
        }
      >
        oussama lmezouari
      </Box>
      <Box
        className={
          'absolute bottom-[15%] left-[45px] text-white capitalize font-Inria'
        }
      >
        <span className="text-[28px]">5000.</span>
        <span className="text-[12px]">45</span>
      </Box>
      <p
        className={
          'absolute bottom-[15%] left-[360px] text-white capitalize font-Inria'
        }
      >
        2025
      </p>

      <Grid container className="justify-center items-center p-4 gap-y-2">
        <Grid item xs={12} className="flex justify-between">
          <Typography variant="h5" className="text-primary-main">
            Refill Balance
          </Typography>
          <Chip label="2500 2000 3000 4000" color="primary" icon={<Wallet />} />
        </Grid>
        <Grid item xs={12}>
          <TextField
            variant="outlined"
            fullWidth
            label="Amount"
            placeholder="Enter amount"
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleInputChange}
            inputProps={{ min: 1 }}
            required
            sx={{
              '& .MuiOutlinedInput-root': {
                '&:hover fieldset': {
                  borderColor: (theme) => theme.palette.secondary.main,
                },
                '&.Mui-focused fieldset': {
                  borderColor: (theme) => theme.palette.primary.main,
                },
              },
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <FormControl fullWidth>
            <InputLabel
              id="payment-type-label"
              sx={{
                '&.Mui-focused': {
                  color: 'black',
                },
              }}
            >
              Payment Type
            </InputLabel>
            <Select
              labelId="payment-type-label"
              value={formData.paymentType}
              onChange={handleSelectChange}
              label="Payment Type"
              sx={{
                '&:hover .MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme) => theme.palette.secondary.main,
                },
                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                  borderColor: (theme) => theme.palette.primary.main,
                },
              }}
            >
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="bank-transfer">Bank Transfer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {formData.paymentType === 'bank-transfer' && (
          <Grid item xs={12}>
            <Button
              variant="outlined"
              component="label"
              color="secondary"
              className="w-full"
            >
              Bank Transfer File
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                hidden
              />
            </Button>
            {formData.file && (
              <p className="mt-2 text-gray-500">{formData.file.name}</p>
            )}
          </Grid>
        )}

        <Grid item xs={12} sx={{ padding: 0 }}>
          <Button
            className="w-full"
            variant="contained"
            color="primary"
            type="submit"
          >
            Refill Balance
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RefillBalanceRequestPage;