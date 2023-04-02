import { Box, Button, Heading } from "@chakra-ui/react";
import { useSearchParams } from "react-router-dom";
import { AiOutlineArrowRight,AiOutlineArrowLeft } from "react-icons/ai";

export function PaginationRounded({ total, page, setpage }) {
  let butoon = new Array(+total).fill(1);

  return (
    <>
      <Box>
        <Button onClick={() => setpage(page + 1)}><AiOutlineArrowLeft/></Button>
        <Button disabled onClick={() => setpage(page + 1)}>
          {page}
        </Button>
        <Button onClick={() => setpage(page + 1)}><AiOutlineArrowRight/></Button>
      </Box>
    </>
  );
}
