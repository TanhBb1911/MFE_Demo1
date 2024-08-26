// // GridLayout.tsx
// import React from 'react';
// import { Grid, GridItem } from '@chakra-ui/react';

// interface GridLayoutProps {
//     positions: { colStart: number; rowStart: number; colSpan: number; rowSpan: number; component: string }[];
//     components: { [key: string]: JSX.Element };
// }

// const GridLayout: React.FC<GridLayoutProps> = ({ positions, components }) => {
//     return (
//         <Grid
//             gap={4}
//         >
//             {positions.map((position, index) => (
//                 <GridItem
//                     key={index}
//                     colStart={{ base: position.colStart, md: position.colStart, lg: position.colStart }}
//                     colSpan={{ base: 2, md: position.colSpan, lg: position.colSpan }}
//                     rowStart={{ base: position.rowStart, md: position.rowStart, lg: position.rowStart }}
//                     rowSpan={{ base: position.rowSpan, md: position.rowSpan, lg: position.rowSpan }}
//                     display="flex"
//                     alignItems="flex-start"
//                     justifyContent="flex-start"
//                     overflow="hidden"
//                     p={2}
//                 >
//                     <div style={{ width: '100%', height: '100%' }}>
//                         {components[position.component]}
//                     </div>
//                 </GridItem>
//             ))}
//         </Grid>
//     );
// };

// export default GridLayout;


// GridLayout.tsx
import React from 'react';
import { Grid, GridItem } from '@chakra-ui/react';

interface GridLayoutProps {
    positions: { span: string; row: string; component: string }[];
    components: { [key: string]: JSX.Element };
}

const GridLayout: React.FC<GridLayoutProps> = ({ positions, components }) => {
    return (
        <Grid
            templateColumns="repeat(12, 1fr)" // Số lượng cột trong grid
            gap={4} // Khoảng cách giữa các item trong grid
        >
            {positions.map((position, index) => {
                const [startCol, colSpan] = position.span.split(' / span ').map(Number);
                const [startRow, rowSpan] = position.row.split(' / span ').map(Number);

                return (
                    <GridItem
                        key={index}
                        colStart={startCol}
                        colSpan={colSpan}
                        rowStart={startRow}
                        rowSpan={rowSpan}
                        display="flex"
                        alignItems="stretch" // Stretch items to fill their grid area
                        justifyContent="center" // Center content horizontally
                        overflow="hidden" // Avoid overflow
                    >
                        <div style={{ width: '100%', height: '100%' }}>
                            {components[position.component]}
                        </div>
                    </GridItem>
                );
            })}
        </Grid>
    );
};

export default GridLayout;
